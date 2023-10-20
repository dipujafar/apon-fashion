import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  const { photo, rating, name, brandName, type, price } = loadedData || {};

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;

    const product = {
      photo,
      rating,
      name,
      brandName,
      type,
      price,
    };

    // data post
    fetch(`https://apon-fashion2.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Update this product");
        }
      });
  };
  return (
    <div className="mt-10">
      <div className="bg-gray-950 p-2 md:p-5 rounded-lg  ">
        <h1 className="text-3xl font-medium text-center mb-5">
          UPDATE PRODUCT
        </h1>
        <form onSubmit={handleAddProduct} className="p-2 w-11/12 mx-auto">
          {/* input type and price name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">PHOTO:</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                id=""
                required
                placeholder="Product Photo URL"
                className=" w-11/12 py-1 px-2 border  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">RATING:</label>
              <input
                type="number"
                name="rating"
                id=""
                defaultValue={rating}
                required
                placeholder="Product Rating"
                className=" w-11/12  py-1 px-2 border  bg-transparent"
              />
            </div>
          </div>
          {/* input name and brand name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">NAME:</label>
              <input
                type="text"
                name="name"
                id=""
                defaultValue={name}
                required
                placeholder="Product Name"
                className=" w-11/12 py-1 px-2 border  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">
                BRAND NAME:
              </label>
              <input
                type="text"
                name="brandName"
                id=""
                defaultValue={brandName}
                required
                placeholder="Brand Name"
                className=" w-11/12  py-1 px-2 border bg-transparent"
              />
            </div>
          </div>
          {/* input type and price name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">TYPE:</label>
              <input
                type="text"
                name="type"
                id=""
                defaultValue={type}
                required
                placeholder="Product type"
                className=" w-11/12 py-1 px-2 border  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">PRICE:</label>
              <input
                type="text"
                name="price"
                id=""
                defaultValue={price}
                required
                placeholder="Product Price"
                className=" w-11/12  py-1 px-2 border  bg-transparent"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Update"
            className="mt-5 btn btn-outline w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
