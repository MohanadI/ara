"use client";

import { Tabs } from "flowbite-react";

export default function TabsWithContent({ tabs }: { tabs: any }) {
  return (
    <Tabs
      className="flex flex-nowrap"
      aria-label="Tabs with underline"
      style="underline"
      theme={{
        base: "flex flex-col gap-2",
        tablist: {
          base: "flex text-center overflow-y-auto",
          styles: {
            underline:
              "-mb-px -mt-[70px]",
          },
          tabitem: {
            base: "flex shrink-0 sm:shrink items-center whitespace-break-spaces w-[130px] sm:w-[190px] justify-center p-1 rounded-t-lg text-sm",
            styles: {
              underline: {
                base: "rounded-t-lg",
                active: {
                  on: "text-white rounded-t-lg font-medium border-b-[4px] border-white active",
                  off: "border-b-2 font-thin border-transparent text-white hover:border-white-300 hover:text-white",
                },
              },
            },
            icon: "mr-2 h-5 w-5",
          },
        },
      }}
    >
      {tabs.map((tab: any, index: any) => (
        <Tabs.Item key={tab.key} title={tab.title}>
          <div className="py-3">{tab.content}</div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
