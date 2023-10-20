import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { BiDollar } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
const CartProduct = ({ product }) => {
  const { _id, photo, name, brandName, type, price, description, rating } =
    product || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "This Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="card  bg-base-100 shadow-xl shadow-orange-100">
      <figure className="px-10 pt-10 md:max-h-72">
        <img src={photo} alt="brand_image" className="rounded-xl h-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl text-orange-400">{name}</h2>
        <div className="text-gray-700 ">
          <p className="text-xl">Brand Name: {brandName}</p>
          <p className="text-xl">Product type: {type}</p>
          <div className="flex justify-between">
            <p className="text-xl flex items-center justify-center">
              Price: <BiDollar className="text-2xl"></BiDollar> {price}
            </p>
            <div className="flex justify-center">
              <Rating style={{ maxWidth: 100 }} value={parseInt(rating)} />
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-end ">
        <button onClick={() => handleDelete(_id)} className="text-4xl">
          <RiDeleteBin2Line></RiDeleteBin2Line>
        </button>
      </div>
    </div>
  );
};
CartProduct.propTypes = {
  product: PropTypes.object,
};

export default CartProduct;
