/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Brand = ({ brand }) => {
  const { brandImage, brandName } = brand;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Link to={`/products/${brandName}`}>
      <div className="card max-h-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={brandImage} alt="Brand-Image" className="w-full" />
        </figure>
        <div
          className="card-body mt-2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2 className="text-4xl text-center font-medium text-sky-400">
            {brandName}
          </h2>
          <p className="text-2xl text-gray-200">
            It's quality standards brand and quality products is here.
          </p>
        </div>
      </div>
    </Link>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
