// 'use client';

import PageHeader from "@/components/PageHeader";

export default function Services() {
    return (
      <PageHeader
        helpText="Get in touch"
        title="Our Services"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Whether you&apos;re looking for information about our services,
            interested in a consultation, or have general inquiries, we&apos;re
            here to help. Feel free to reach out to us using any of the channels
            below:
          </p>
        }
        background={
          "linear-gradient(110.11deg, #000A0E 10.08%, rgba(0, 111, 157, 0.56) 100%), url('./services_header.svg')  no-repeat center center / cover"
        }
      />
    );
}
