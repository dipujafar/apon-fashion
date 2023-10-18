const AddProduct = () => {
  return (
    <div className="mt-5">
      <div className="bg-gray-950 p-5 rounded  min-h-screen">
        <h1 className="text-3xl font-medium text-center mb-5">ADD A PRODUCT</h1>
        <form className="p-2 w-11/12 mx-auto">
          {/* input type and price name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">PHOTO:</label>
              <input
                type="text"
                name="photo"
                id=""
                placeholder="Product Photo URL"
                className=" w-11/12 py-1 px-2 border  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">RATING:</label>
              <input
                type="text"
                name="rating"
                id=""
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
              name=""
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
