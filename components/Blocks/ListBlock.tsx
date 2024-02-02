"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { List } from "flowbite-react";

export default function ListBlock({ data }: any) {
  return (
    <BlocksRenderer
        content={data}
        blocks={{
          list: ({ children }) => <List className="text-base text-[#003E57] font-light">{children}</List>,
          "list-item": ({ children }) => <List.Item>{children}</List.Item>,
        }}
      />
  );
}