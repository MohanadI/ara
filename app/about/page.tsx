import PageHeader from "@/components/PageHeader";
import { DefaultImageSlider } from "@/components/sliders/DefaultImageSlider";

export default function About() {
  return (
    <>
      <PageHeader
        helpText="Get to know us"
        title="Who We Are"
        description={
          <div>
            <p className="p-2 text-center mt-6 description-paragraph text-white">
              Founded on a vision of revolutionizing the business landscape, ARA
              Consulting emerged as a dynamic force in the SAP solutions arena.
              Our journey began with a passionate team of experts determined to
              bridge the gap between businesses and cutting-edge technology.
              Since our inception, we have been committed to creating value for
              our clients by aligning their goals with the transformative power
              of SAP.
            </p>
            <p className="p-2 text-center mt-6 description-paragraph text-white">
              As technology rapidly evolves, so do we. ARA CONSULTING has
              continually adapted and expanded its offerings to stay at the
              forefront of SAP solutions. We pride ourselves on embracing change
              and using it as a catalyst for innovation.
            </p>
            <p className="p-2 text-center mt-6 description-paragraph text-white">
              Witnessing firsthand the potential for streamlined operations,
              enhanced efficiency, and unprecedented growth, we recognized the
              pivotal role we could play in helping organizations navigate the
              complexities of digital transformation.
            </p>
          </div>
        }
      />
      <section className="text-gray-600 body-font">
        <div className="container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-20 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl pb-8">
              <div className="w-full mb-9 mt-9">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font mb-2"
                  style={{
                    color: "#003E57",
                    fontSize: "32px",
                    fontWeight: 400,
                    lineHeight: "38px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Our Mission
                </h1>
                <div
                  className="h-1 w-10 rounded m-auto"
                  style={{ background: "#003E57" }}
                ></div>
              </div>
              <p className="p-2 text-center description-paragraph text-[#316377]">
                At the core of ARA CONSULTING&apos;s mission is a commitment to
                empower small, medium and large enterprises with the
                transformative capabilities of SAP solutions.
              </p>
              <p className="p-2 text-center mt-6 description-paragraph text-[#316377]">
                We understand the unique demands of each sector and tailor our
                SAP services to meet the specific needs of your industry.
              </p>
              <p className="p-2 text-center mt-6 description-paragraph text-[#316377]">
                We believe that every business, regardless of size or industry,
                deserves access to cutting-edge technology that can propel them
                to new heights of efficiency and success by fostering growth at
                every stage of your business journey
              </p>
            </div>
            <div
              className="rounded-xl"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./our_mission.svg')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-2 gap-1 mt-20">
            <DefaultImageSlider
              slides={[
                {
                  img: "./adaptability_image.svg",
                  label: "Innovation",
                },
                {
                  img: "./adaptability_image.svg",
                  label: "Integrity",
                },
                {
                  img: "./adaptability_image.svg",
                  label: "Collaboration",
                },
                {
                  img: "./adaptability_image.svg",
                  label: "Excellence",
                },
                {
                  img: "./adaptability_image.svg",
                  label: "Adaptability",
                },
              ]}
            />
            <div className="bg-white pb-8 rounded-r-xl">
              <div className="w-full mb-9 mt-9">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font mb-2"
                  style={{
                    color: "#003E57",
                    fontSize: "32px",
                    fontWeight: 400,
                    lineHeight: "38px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Our Values
                </h1>
                <div
                  className="h-1 w-10 rounded m-auto"
                  style={{ background: "#003E57" }}
                ></div>
              </div>
              <p className="px-5 py-2 description-paragraph text-[#316377]">
                We embrace <span className="font-semibold">innovation</span> as
                a driving force, staying ahead of industry trends to provide
                cutting-edge solutions.
              </p>
              <p className="px-5 py-2 mt-2 description-paragraph text-[#316377]">
                Our commitment to{" "}
                <span className="font-semibold">integrity</span> is unwavering,
                ensuring transparency, honesty, and trust in all our
                interactions.
              </p>
              <p className="px-5 py-2 mt-2 description-paragraph text-[#316377]">
                We believe in the power of{" "}
                <span className="font-semibold">collaboration</span>, fostering
                strong partnerships with our clients to achieve shared success
              </p>
              <p className="px-5 py-2 mt-2 description-paragraph text-[#316377]">
                Striving for <span className="font-semibold">excellence</span>{" "}
                is at the core of everything we do, from setting the bar high
                for ourselves and our clients to providing exceptional client
                service.
              </p>
              <p className="px-5 py-2 mt-2 description-paragraph text-[#316377]">
                In the ever-changing landscape of technology,{" "}
                <span className="font-semibold">adaptability</span> is key. We
                are agile and responsive, ready to meet the evolving needs of
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="body-font"
        style={{ background: "rgba(0, 52, 74, 1)" }}
      >
        <div className="w-full pb-10 pt-10">
          <h1
            className="sm:text-3xl text-2xl font-medium text-white title-font mb-2"
            style={{
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "38px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            What we do
          </h1>
          <div className="h-1 w-10 rounded m-auto bg-white"></div>
        </div>
        <div className="container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-5 mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <p className="p-2 description-paragraph text-white text-base leading-relaxed">
              We provide a diverse range of SAP solutions, unlocking the full
              potential of technology for clients through optimized processes
              and enhanced customer experiences.
            </p>
            <div className="custom-box">
              <p className="box-title">Implementation</p>
              <p className="box-body">
                Seamlessly integrate SAP solutions into your business processes
              </p>
            </div>
            <div className="custom-box">
              <p className="box-title">Consulting</p>
              <p className="box-body">
                Leverage our expertise for strategic guidance and informed
                decision-making
              </p>
            </div>
            <div className="custom-box">
              <p className="box-title">Development</p>
              <p className="box-body">
                Enhancing existing SAP applications and developing custom
                modules
              </p>
            </div>
            <div className="custom-box">
              <p className="box-title">Enablement</p>
              <p className="box-body">
                training , end user training and courses and certificates.
              </p>
            </div>
            <div className="custom-box">
              <p className="box-title">Automation</p>
              <p className="box-body">
                Enhance operations, cut costs, boost productivity with
                intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center text-4xl py-32">
        <h1 style={{ color: "#005375" }}>
          Take your business to new heights with SAP Business One
        </h1>
      </section>
    </>
  );
}
