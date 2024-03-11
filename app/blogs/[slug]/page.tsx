import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getBlog } from "@/lib/blogs";

interface BlogPageParams {
  slug: string;
}

interface BlogPageProps {
  params: BlogPageParams;
}

export async function generateMetadata({
  params: { slug },
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlog(slug);
  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    keywords: blog.keywords,
    description: blog.meta_description
  };
}

export default async function Blog({ params: { slug } }: BlogPageProps) {
  const data = await getBlog(slug);
  if (!data) {
    notFound();
  }
  return (
    <>
      <PageHeader helpText={data.sub_title} title={data.title} description="" />
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-5 sm:py-10 sm:pt-20 mx-auto">
          <article
            dangerouslySetInnerHTML={{ __html: data.body }}
            className="max-w-screen-lg"
            style={{ fontFamily: 'SF Pro Display !important' }}
          />
        </div>
      </section>
    </>
  );
}
