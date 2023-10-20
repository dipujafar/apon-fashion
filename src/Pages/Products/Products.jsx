import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Marquee from "react-fast-marquee";

const Products = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const loadedProducts = useLoaderData();

  useEffect(() => {
    const filteredProducts = loadedProducts.filter(
      (product) => product.brandName.toLowerCase() === brandName.toLowerCase()
    );
    setProducts(filteredProducts);
  }, [loadedProducts, brandName]);
  return (
    <div className="mt-10 min-h-screen">
      <h1 className="text-3xl text-center mb-5 text-orange-400 font-medium">
        {products.length ? `${brandName} Available Products` : ""}
      </h1>
      <div>
        {products.length ? (
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        ) : (
          <div className="min-h-screen  flex items-center justify-center">
            <h1 className="text-2xl text-red-600">
              <Marquee direction="right">
                At this time, there are no available products.. {"  "}
              </Marquee>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
