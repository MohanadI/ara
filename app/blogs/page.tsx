import CardComponent from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getBlogs } from "@/lib/blogs";

export default async function Blogs() {
  const { blogs } = await getBlogs(10);

  return (
    <>
      <PageHeader helpText="Our blogs" title="Blogs" description="" />
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-5 sm:py-10 sm:pt-20 mx-auto">
          <div className="sm:grid sm:grid-cols-3 sm:gap-2">
            {blogs.map((item, index) => (
              <CardComponent
                key={index}
                image={item.image}
                slug={item.slug}
                title={item.title}
                sub_title={item.sub_title}
                publishedAt={item.publishedAt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
