import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import CustomerReviews from "../../Components/Customer/CustomerReviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <CustomerReviews></CustomerReviews>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
