import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

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
              <p className="text-xl">Price: {price}</p>
              <Rating style={{ maxWidth: 250 }} value={parseInt(rating)} />
            </div>
          </div>
          <div>
            <Link to={`/details/${product._id}`}>
              <button className="btn btn-outline btn-warning mb-4 mr-2">
                Details
              </button>
            </Link>
            <button className="btn btn-outline btn-warning">Update</button>
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
