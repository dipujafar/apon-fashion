import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-10 bg-base-300 rounded mt-5">
      <div className="flex justify-center flex-wrap">
        <div className="md:mr-20 text-center">
          <h3 className="text-2xl font-medium text-orange-400">Call</h3>
          <p>+880-195-----</p>
        </div>
        <div className="md:mr-20 text-center">
          <h3 className="text-2xl  font-medium text-orange-400">Visit</h3>
          <p>SSK road, Feni</p>
        </div>
        <div className="md:mr-20 text-center">
          <h3 className="text-2xl  font-medium text-orange-400">Email</h3>
          <p>aponeventfeni@gmal.com</p>
        </div>
      </div>
      <h2 className="text-center text-2xl text-orange-400 mt-5">
        AOPN Fashion House Stylish World of Attire.....
      </h2>
      <div className="flex gap-5 text-2xl justify-center mt-4">
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaInstagram></FaInstagram>
      </div>
      <div className="text-center text-xl  mt-5">
        <h3>Copyright © 2023 - All right reserved by Apon Fashion</h3>
      </div>
    </footer>
  );
};

export default Footer;
