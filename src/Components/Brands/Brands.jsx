import { useEffect } from "react";
import { useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brandData.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-10 bg-gray-100 rounded pt-2">
      <h1 className="text-center text-4xl text-orange-400 mb-5">
        Products Brands
      </h1>
      <div className="grid md:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
