import "server-only";

import qs from "qs";
import { marked } from "marked";

export const CACHE_TAG_BLOGS = "blogs";

const CMS_URL = process.env.CMS_URL;

interface CmsItem {
  id: number;
  attributes: any;
}

export interface Blog {
  slug: string;
  title: string;
  sub_title: string;
  image: string;
  body: string;
  keywords: string;
  meta_description: string;
  publishedAt: string;
}

export interface FullBlog extends Blog {
  body: any;
}

export interface PaginatedBlogs {
  pageCount: number;
  blogs: Blog[];
}

export type SearchableBlog = Pick<Blog, "title">;

export async function getBlog(slug: string): Promise<FullBlog | null> {
  const { data } = await fetchBlogs({
    filters: { slug: { $eq: slug } },
    fields: [
      "slug",
      "title",
      "sub_title",
      "body",
      "keywords",
      "meta_description",
      "publishedAt",
    ],
    populate: { image: { fields: ["url", "alternativeText"] } },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    ...toBlog(item),
    body: marked(item.attributes.body),
  };
}

export async function getBlogs(
  pageSize: number,
  page?: number
): Promise<PaginatedBlogs> {
  const { data, meta } = await fetchBlogs({
    fields: [
      "slug",
      "title",
      "sub_title",
      "keywords",
      "meta_description",
      "body",
      "publishedAt",
    ],
    populate: { image: { fields: ["url", "alternativeText"] } },
    sort: ["publishedAt:asc"],
    pagination: { pageSize, page },
  });
  return {
    pageCount: meta.pagination.pageCount,
    blogs: data.map(toBlog),
  };
}

export async function searchBlogs(query: string): Promise<SearchableBlog[]> {
  const { data } = await fetchBlogs({
    filters: { title: { $contains: query } },
    fields: ["title"],
    sort: ["title"],
    pagination: { pageSize: 5 },
  });
  return data?.map(({ attributes }: { attributes: Blog }) => ({
    title: attributes?.title,
  }));
}

async function fetchBlogs(parameters: any) {
  const url =
    `${CMS_URL}/api/blogs?` +
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

function toBlog(item: CmsItem): Blog {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    sub_title: attributes.sub_title,
    image: new URL(attributes.image.data.attributes.url, CMS_URL).href,
    body: attributes.body,
    keywords: attributes.keywords,
    meta_description: attributes.meta_description,
    publishedAt: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
  };
}
