import { Card } from "flowbite-react";
import { HiOutlineCalendar } from "react-icons/hi";
import Link from "next/link";

function CardComponent({
  image,
  slug,
  title,
  sub_title,
  publishedAt,
}: {
  image: string;
  slug: string;
  title: string;
  sub_title: string;
  publishedAt: string;
}) {
  return (
    <Link href={`/blogs/${slug}`}>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
      >
        <div className="flex items-center justify-between">
          <p className="font-normal text-gray-600">{sub_title}</p>
          <p className="flex font-normal text-[13px] text-gray-600">
            <HiOutlineCalendar className="h-4 w-4 mr-1" />
            {publishedAt}
          </p>
        </div>

        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </Card>
    </Link>
  );
}

export default CardComponent;