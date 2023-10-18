import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
