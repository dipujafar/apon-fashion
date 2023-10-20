import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const Product = ({ product }) => {
  const { photo, rating, name, brandName, type, price } = product || {};
  return (
    <div className="card lg:max-h-72 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="product_image" className="w-80" />
      </figure>
      <div className="card-body">
        <div className="md:flex items-center gap-2">
          <div className="mb-4">
            <h2 className="text-2xl font-medium mb-3">{name}</h2>
            <div className="space-y-2">
              <p className="text-xl">Band Name: {brandName}</p>
              <p className="text-xl">Product Type: {type}</p>
              <p className="text-xl flex items-center">
                Price: <BiDollar className="text-2xl"></BiDollar>
                {price}
              </p>
              <Rating style={{ maxWidth: 250 }} value={parseInt(rating)} />
            </div>
          </div>
          <div>
            <Link to={`/details/${product._id}`}>
              <button className="btn btn-outline btn-warning mb-4 mr-2">
                Details
              </button>
            </Link>
            <Link to={`/update/${product._id}`}>
              <button className="btn btn-outline btn-warning">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
