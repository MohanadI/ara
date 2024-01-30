import "server-only";

import { marked } from "marked";
import qs from "qs";

export const CACHE_TAG_PRODUCTS = "products";

const CMS_URL = process.env.CMS_URL;

interface CmsItem {
  id: number;
  attributes: any;
}

export interface Product {
  title: string;
  description: string;
  image: string;
}

export interface FullProduct extends Product {
  body: any;
}

export interface PaginatedProducts {
  pageCount: number;
  products: Product[];
}

export type SearchableProduct = Pick<Product, "title">;

export async function getProduct(title: string): Promise<FullProduct | null> {
  const { data } = await fetchProducts({
    filters: { title: { $eq: title } },
    fields: ["title", "description", "publishedAt", "body"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    ...toProduct(item),
    body: marked(item.attributes.body),
  };
}

export async function getProducts(
  pageSize: number,
  page?: number
): Promise<PaginatedProducts> {
  const { data, meta } = await fetchProducts({
    fields: ["title", "description", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:asc"],
    pagination: { pageSize, page },
  });
  return {
    pageCount: meta.pagination.pageCount,
    products: data.map(toProduct),
  };
}

export async function searchProducts(query: string): Promise<SearchableProduct[]> {
  const { data } = await fetchProducts({
    filters: { title: { $contains: query } },
    fields: ["title"],
    sort: ["title"],
    pagination: { pageSize: 5 },
  });
  return data.map(({ attributes }: { attributes: Product }) => ({
    title: attributes.title,
  }));
}

async function fetchProducts(parameters: any) {
  const url =
    `${CMS_URL}/api/products?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_PRODUCTS],
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
    image: new URL(attributes.image.data.attributes.url, CMS_URL).href,
  };
}
