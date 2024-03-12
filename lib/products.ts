import "server-only";

import { type BlocksContent } from "@strapi/blocks-react-renderer";

import qs from "qs";

export const CACHE_TAG_PRODUCTS = "products";

const CMS_URL = process.env.CMS_URL;

interface CmsItem {
  id: number;
  attributes: any;
}

interface ProductModule {
  title: string;
  description: string;
}

interface ProductMethodology {
  title: string;
  description: BlocksContent;
}

interface ProductBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  title: string;
  description: string;
  image: string;
  modules: ProductModule[];
  methodologies: ProductMethodology[];
  benefits: ProductBenefit[];
}

export interface PaginatedProducts {
  pageCount: number;
  products: Product[];
}

export type SearchableProduct = Pick<Product, "title">;

export async function getProduct(title: string): Promise<Product | null> {
  const { data } = await fetchProducts({
    filters: { title: { $eq: title } },
    fields: ["title", "description", "publishedAt"],
    populate: {
      image: { fields: ["url"] },
      modules: { fields: ["title", "description"] },
      methodologies: { fields: ["title", "description"] },
      benefits: {
        fields: ["title", "description"],
        populate: {
          icon: { fields: ["url"] },
        },
      },
    },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return toProduct(item);
}

export async function getProducts(
  pageSize: number,
  page?: number
): Promise<PaginatedProducts> {
  const { data, meta } = await fetchProducts({
    fields: ["title", "description", "publishedAt"],
    populate: {
      image: { fields: ["url"] },
      modules: { fields: ["title", "description"] },
      methodologies: { fields: ["title", "description"] },
      benefits: {
        fields: ["title", "description"],
        populate: {
          icon: { fields: ["url"] },
        },
      },
    },
    sort: ["publishedAt:asc"],
    pagination: { pageSize, page },
  });
  return {
    pageCount: meta.pagination.pageCount,
    products: data.map(toProduct),
  };
}

export async function searchProducts(
  query: string
): Promise<SearchableProduct[]> {
  const { data } = await fetchProducts({
    filters: { title: { $contains: query } },
    fields: ["title"],
    sort: ["title"],
    pagination: { pageSize: 5 },
  });
  return data?.map(({ attributes }: { attributes: Product }) => ({
    title: attributes?.title,
  }));
}

async function fetchProducts(parameters: any) {
  const url =
    `${CMS_URL}/api/products?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toProduct(item: CmsItem): Product {
  const { attributes } = item;
  return {
    title: attributes.title,
    description: attributes.description,
    image: attributes.image.data ? new URL(attributes.image.data?.attributes.url, CMS_URL).href : "",
    modules: attributes.modules.data.map(toProductModule),
    methodologies: attributes.methodologies.data.map(toProductMethodology),
    benefits: attributes.benefits.data.map(toProductBenefit),
  };
}

function toProductModule(item: CmsItem): ProductModule {
  const { attributes } = item;
  return {
    title: attributes.title,
    description: attributes.description,
  };
}

function toProductMethodology(item: CmsItem): ProductMethodology {
  const { attributes } = item;
  return {
    title: attributes.title,
    description: attributes.description,
  };
}

function toProductBenefit(item: CmsItem): ProductBenefit {
  const { attributes } = item;
  return {
    title: attributes.title,
    description: attributes.description,
    icon: attributes.icon.data ? new URL(attributes.icon.data?.attributes.url, CMS_URL).href : "",
  };
}
