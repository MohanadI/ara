"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function AssetManagement() {
    const cardTheme = {
        root: {
            base: "flex rounded-lg border-l-[3px] border-l-[#005375] border-solid shadow-[0px_0px_4px_0px_#0031461A] bg-white",
            children: "flex flex-col justify-start gap-4 p-3",
            horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row",
            },
            href: "hover:bg-gray-100 dark:hover:bg-gray-700",
        }
    };
    return (
        <div className="text-left">
            <div>
                <h2 className="text-sm font-light text-[#316377]">
                    Product overview
                </h2>
                <h1 className="text-[#003E57] font-semibold text-xl mt-2">
                    Asset Management Solution
                </h1>
                <p className="text-sm font-light text-[#003E57] mt-6">
                    Effectively manage your assets throughout their lifecycle with our Asset Management Solution. This product provides comprehensive tools for asset tracking, maintenance planning, and work orders management.
                </p>
            </div>
            <h1 className="text-[#003E57] text-xl mt-10">
                Main Modules and Functionalities:
            </h1>
            <div className="grid grid-cols-2 gap-6 mt-4">
                <Card theme={cardTheme} href="#">
                    <h5 className="text-lg font-normal text-[#003E57]">
                        Asset Tracking
                    </h5>
                    <p className="text-base font-light text-[#003E57]">
                        Track the location and status of assets in real-time
                    </p>
                </Card>
                <Card theme={cardTheme} href="#">
                    <h5 className="text-lg font-normal text-[#003E57]">
                        Maintenance Planning
                    </h5>
                    <p className="text-base font-light text-[#003E57]">
                        Schedule and manage routine maintenance tasks for assets
                    </p>
                </Card>
                <Card theme={cardTheme} href="#">
                    <h5 className="text-lg font-normal text-[#003E57]">
                        Work Orders Management
                    </h5>
                    <p className="text-base font-light text-[#003E57]">
                        This module will manage your preventive and corrective work orders along with the cost of materials and resources used in each tas
                    </p>
                </Card>
                <Card theme={cardTheme} href="#">
                    <h5 className="text-lg font-normal text-[#003E57]">
                        Health & Safety Management
                    </h5>
                    <p className="text-base font-light text-[#003E57]">
                        Comply with industry standards and your assets manuals to keep your employees safe
                    </p>
                </Card>
            </div>
            <div className="mt-9">
                <h1 className="text-[#003E57] font-normal text-xl">
                    Key Benefits of using Human Resources Management System and Employee Self-service Portal:
                </h1>
                <div className="grid grid-cols-3 gap-6 mt-7">
                    <Card className="max-w-sm shadow-none">
                        <div className="flex flex-col items-center">
                            <Image
                                alt="Bonnie image"
                                height="56"
                                src="/Frame 486.svg"
                                width="56"
                                className="mb-6"
                            />
                            <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                                Extended Asset Lifespan
                            </h5>
                            <p className="text-base text-center font-light text-[#003E57]">
                                Ensure proper maintenance for prolonged asset lifespan
                            </p>
                        </div>
                    </Card>
                    <Card className="max-w-sm shadow-none">
                        <div className="flex flex-col items-center">
                            <Image
                                alt="Bonnie image"
                                height="56"
                                src="/Integrated Workflow.svg"
                                width="56"
                                className="mb-6"
                            />
                            <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                                Cost Savings
                            </h5>
                            <p className="text-base text-center font-light text-[#003E57]">
                                Minimize downtime and reduce unexpected maintenance costs
                            </p>
                        </div>
                    </Card>
                    <Card className="max-w-sm shadow-none">
                        <div className="flex flex-col items-center">
                            <Image
                                alt="Bonnie image"
                                height="56"
                                src="/Data-Driven Decision-Making.svg"
                                width="56"
                                className="mb-6"
                            />
                            <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                                Compliance
                            </h5>
                            <p className="text-base text-center font-light text-[#003E57]">
                                Stay compliant with regulations through accurate asset reporting
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}