import { useLoaderData } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const productData = useLoaderData();
  const { photo, name, brandName, type, price, description, rating } =
    productData || {};

  const cartProduct = {
    photo,
    name,
    brandName,
    type,
    price,
    description,
    rating,
  };

  //product data save database
  const handleAddCart = () => {
    fetch("https://apon-fashion2.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added in cart");
        }
      });
  };
  return (
    <div className="mt-10">
      <div className="h-20 bg-gray-800 shadow-xl shadow-orange-100 rounded">
        <h1 className="text-center font-semibold text-sky-500 text-4xl py-3">
          Product Details
        </h1>
      </div>
      <div className="card  bg-base-100 shadow-xl shadow-orange-100">
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
            <button onClick={handleAddCart}>
              <div className="badge badge-outline text-green-800">Add Card</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
