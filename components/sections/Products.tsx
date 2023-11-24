export const ProductsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-20 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-20 text-center">
          <p className="w-full leading-relaxed text-gray-500 text-sm">
            Strong variety of products
          </p>
          <div className="w-full mb-6 lg:mb-0">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2"
              style={{ color: "#003E57" }}
            >
              Our Products
            </h1>
            <div
              className="h-1 w-10 rounded m-auto"
              style={{ background: "#003E57" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
