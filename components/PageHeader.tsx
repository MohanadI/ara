// 'use client';

export default function PageHeader({
  helpText,
  title,
  description,
  background = "linear-gradient(111.31deg, rgba(1, 83, 116, 0.9) 3.88%, rgba(0, 83, 117, 0.4) 100%), url('/rm373batch2-09 1.svg')",
  bottomPadding = "0px",
}: {
  helpText: string;
  title: string;
  description: any;
  background?: string;
  bottomPadding?: string;
}) {
  return (
    <section
      style={{
        background: background,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: bottomPadding,
      }}
    >
      <div className="container mx-auto py-20 pt-40 text-center">
        <p className="w-full leading-relaxed text-gray-100 text-xs font-light">
          {helpText}
        </p>
        <h1 className="sm:text-3xl text-2xl m-auto font-medium title-font mt-2 mb-2 text-white">
          {title}
        </h1>
        <div className="h-1 w-8 rounded m-auto bg-white"></div>
        {description}
      </div>
    </section>
  );
}
