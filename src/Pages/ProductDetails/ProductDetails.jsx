import { useLoaderData } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const ProductDetails = () => {
  const productData = useLoaderData();
  const { photo, name, brandName, type, price, description } =
    productData || {};
  console.log(productData);
  return (
    <div className="mt-10">
      <div className="h-20 bg-gray-800 rounded">
        <h1 className="text-center font-semibold text-sky-500 text-4xl py-3">
          Product Details
        </h1>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="brand_image"
            className="w-full  lg:max-h-96 md:max-h-72"
          />
        </figure>
        <div className="card-body">
          <h2 className="md:text-5xl text-2xl font-medium text-orange-400">
            {name}
          </h2>
          <p className="text-xl font-medium">Brand: {brandName}</p>
          <p className="text-xl font-medium">Product Type: {type}</p>
          <p className="text-xl font-medium flex items-center">
            Price:
            <BiDollar className="text-2xl"></BiDollar> {price}
          </p>
          <p className="text-xl text-gray-700">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Add Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
