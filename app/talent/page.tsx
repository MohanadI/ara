// 'use client';

import PageHeader from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import TalentForm from "@/components/TalentForm";

export default function Talent() {
  return (
    <>
      <PageHeader
        helpText="Get in touch"
        title="Talent"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Whether you&apos;re looking for information about our services,
            interested in a consultation, or have general inquiries, we&apos;re
            here to help. Feel free to reach out to us using any of the channels
            below:
          </p>
        }
        background={
          "linear-gradient(7.39deg, rgba(0, 31, 44, 0.68) 15.55%, rgba(3, 90, 126, 0.64) 82.75%), url('./businessman-touching-virtual-human-icon-focus-customer-group-human-recruitment-development-concept 1.svg')  no-repeat center center / cover"
        }
      />

      <section className="pt-20">
        <div className="container mx-auto px-3">
          <SectionTitle subTitle="Get to know us" Title="ARA CONSULTING" />
          <p
            className="p-2 text-center mt-6"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "19px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "rgba(49, 99, 119, 1)",
            }}
          >
            Founded on a vision of revolutionizing the business landscape, ARA
            CONSULTING emerged as a dynamic force in the SAP solutions arena.
            Our journey began with a passionate team of experts determined to
            bridge the gap between businesses and cutting-edge technology. Since
            our inception, we have been committed to creating value for our
            clients by aligning their goals with the transformation power of
            SAP.
          </p>
          <p
            className="p-2 text-center mt-1"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "19px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "rgba(49, 99, 119, 1)",
            }}
          >
            As technology rapidly evolves, so do we. ARA CONSULTING has
            continually adapted and expanded its offerings to stay at the
            forefront of SAP solutions. We pride ourselves on embracing change
            and using it as a catalyst for innovation.
          </p>
          <TalentForm />
        </div>
      </section>
    </>
  );
}
