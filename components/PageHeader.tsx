// 'use client';

export default function PageHeader({
  helpText,
  title,
  description,
}: {
  helpText: String;
  title: String;
  description: any;
}) {
  return (
    <div
      className="relative isolate px-6 pt-10 lg:px-8"
      style={{
        background:
          "linear-gradient(111.31deg, rgba(1, 83, 116, 0.9) 3.88%, rgba(0, 83, 117, 0.4) 100%), url('/rm373batch2-09 1.svg')",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-5xl py-32 sm:py-32 sm:pb-8 text-center">
        <p className="w-full leading-relaxed text-gray-100 text-xs font-light">
          {helpText}
        </p>
        <h1 className="sm:text-3xl text-2xl m-auto font-medium title-font mt-2 mb-2 text-white">
          {title}
        </h1>
        <div className="h-1 w-8 rounded m-auto bg-white"></div>
        {description}
      </div>
    </div>
  );
}
