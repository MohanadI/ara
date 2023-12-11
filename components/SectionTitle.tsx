export const SectionTitle = ({
  subTitle,
  Title,
}: {
  subTitle: String;
  Title: String;
}) => {
  return (
    <div className="flex flex-wrap w-full mb-10 text-center">
      <p
        className="w-full leading-relaxed"
        style={{
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "19px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "rgba(49, 99, 119, 1)",
        }}
      >
        {subTitle}
      </p>
      <div className="w-full mb-6 mt-3 lg:mb-0">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2"
          style={{
            color: "#003E57",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          {Title}
        </h1>
        <div
          className="h-1 w-10 rounded m-auto"
          style={{ background: "#003E57" }}
        ></div>
      </div>
    </div>
  );
};
