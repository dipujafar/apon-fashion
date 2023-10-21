import PropTypes from "prop-types";
const CustomerReview = ({ review }) => {
  const { name, image, review_description } = review;
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className=" flex w-full bg-gray-300 p-2  flex-col rounded-xl text-gray-700 shadow-none md:h-72">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-white shadow-none">
          <img
            src={image}
            alt="client image"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
              </h5>
            </div>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {review_description}
          </p>
        </div>
      </div>
    </div>
  );
};
CustomerReview.propTypes = {
  review: PropTypes.object,
};

export default CustomerReview;
