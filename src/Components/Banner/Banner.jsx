const Banner = () => {
  return (
    <div>
      <div
        className="hero  md:h-[500px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/FqJpwgQ/fashion1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex items-center justify-between">
            <div className="max-w-md ">
              <h1 className="mb-5 text-5xl text-orange-400 font-bold">
                Apon Fashion
              </h1>
              <p className="mb-5 text-xl text-gray-800">
                Apon Fashion House offers a meticulously curated selection of
                stylish apparel, allowing you to express your unique fashion
                sense with confidence and grace.
              </p>
            </div>
            <div className="hidden md:inline ">
              <img
                src="https://i.ibb.co/t3YBh9L/istockphoto-1193750118-612x612-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
