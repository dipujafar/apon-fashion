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
      <div className="carousel w-full mb-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/DrTBbKw/offer1.jpg"
            className="w-full max-h-56 md:max-h-80"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ZmJnXXT/offer2.jpg"
            className="w-full max-h-56 md:max-h-80"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ZH52T6m/offer3.png"
            className="w-full max-h-56 md:max-h-80"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/kMpSsWJ/offer4.png"
            className="w-full max-h-56 md:max-h-80"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
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
