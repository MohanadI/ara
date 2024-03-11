// 'use client';

import PageHeader from "@/components/PageHeader";
import TabsWithContent from "@/components/TabsWithContent";
import { getProducts } from "@/lib/products";
import Content from "./list/Content";

export default async function Products() {
  const productsList = await getProducts(10, 0);

  let productsTabs = [];

  productsList?.products.map((item) => {
    productsTabs.push({
      key: item.title,
      title: item.title,
      content: <Content title={item.title} />,
    });
  });

  return (
    <>
      <PageHeader
        helpText="Wide variety of Products"
        title="Our Products"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Explore innovation with our SAP-powered solutions tailored for
            modern businesses. As your service partner, ARA CONSULTING delivers
            transformable products for enhanced efficiency and sustainable
            growth.
          </p>
        }
        background={
          "linear-gradient(110.11deg, #000A0E 10.08%, rgba(0, 111, 157, 0.56) 100%), url('./joint-development-new-product-business-technology-internet 1 (1).svg')  no-repeat center center / cover"
        }
        bottomPadding="50px"
      />
      <div className="mb-10 text-center container mx-auto">
        <TabsWithContent tabs={productsTabs} />
      </div>
    </>
  );
}
