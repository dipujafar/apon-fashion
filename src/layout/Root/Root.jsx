import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl p-2 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
