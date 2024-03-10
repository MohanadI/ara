import "server-only";

import { marked } from "marked";
import qs from "qs";

export const CACHE_TAG_SERVICES = "services";

const CMS_URL = process.env.CMS_URL;

interface CmsItem {
  id: number;
  attributes: any;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface FullService extends Service {
  body: any;
}

export interface PaginatedServices {
  pageCount: number;
  services: Service[];
}

export type SearchableService = Pick<Service, "title">;

export async function getService(title: string): Promise<FullService | null> {
  const { data } = await fetchServices({
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
    ...toService(item),
    body: marked(item.attributes.body),
  };
}

export async function getServices(
  pageSize: number,
  page?: number
): Promise<PaginatedServices> {
  const { data, meta } = await fetchServices({
    fields: ["title", "description", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:asc"],
    pagination: { pageSize, page },
  });
  return {
    pageCount: meta.pagination.pageCount,
    services: data.map(toService),
  };
}

export async function searchServices(
  query: string
): Promise<SearchableService[]> {
  const { data } = await fetchServices({
    filters: { title: { $contains: query } },
    fields: ["title"],
    sort: ["title"],
    pagination: { pageSize: 5 },
  });
  return data?.map(({ attributes }: { attributes: Service }) => ({
    title: attributes?.title,
  }));
}

async function fetchServices(parameters: any) {
  const url =
    `${CMS_URL}/api/services?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_SERVICES],
    },
  });
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toService(item: CmsItem): Service {
  const { attributes } = item;
  return {
    title: attributes.title,
    description: attributes.description,
    image:
      new URL(attributes.image.data?.attributes.url, CMS_URL).href,
  };
}
