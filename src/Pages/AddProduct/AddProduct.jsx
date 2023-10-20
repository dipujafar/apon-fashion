import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const product = {
      photo,
      rating,
      name,
      brandName,
      type,
      price,
      description,
    };
    console.log(product);

    // data post
    fetch("https://apon-fashion2.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully add this product");
        }
      });
  };
  return (
    <div className="mt-10">
      <div className="bg-gray-950 p-2 md:p-5 rounded-lg  min-h-screen">
        <h1 className="text-3xl font-medium text-center mb-5">ADD A PRODUCT</h1>
        <form onSubmit={handleAddProduct} className="p-2 w-11/12 mx-auto">
          {/* input type and price name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">PHOTO:</label>
              <input
                type="text"
                name="photo"
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
                required
                placeholder="Product Price"
                className=" w-11/12  py-1 px-2 border  bg-transparent"
              />
            </div>
          </div>
          {/* Shot description */}
          <div>
            <label className="text-lg font-medium mr-2 block">
              DESCRIPTION:
            </label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="3"
              placeholder="Write short Description"
              className="w-11/12 py-1 px-2 bg-transparent border"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="mt-5 btn btn-outline w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
