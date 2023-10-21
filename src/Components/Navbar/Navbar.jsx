import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/apon-logo-1.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import profile from "../../assets/images/user.png";
const Navbar = () => {
  const { user, logOutUser, show, setShow } = useContext(AuthContext);
  console.log(user);

  //logout function
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast("Successfully Loge Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li className="text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-400" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-400" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo_image" className="w-24" />
            <a className="italic text-orange-400 text-sm md:font-medium">
              APON Fashion
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div
              onClick={() => setShow(!show)}
              className="cursor-pointer relative"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="w-10 rounded-full" />
              ) : (
                <img src={profile} alt="" className="w-10 rounded-full" />
              )}
              <div
                className={`absolute top-14 right-0 bg-blue-100 rounded space-y-2 py-4 w-52 items-center justify-center z-10    ${
                  show || " -top-60 "
                }`}
              >
                <div className="flex justify-center">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-16 rounded-full"
                    />
                  ) : (
                    <img src={profile} alt="" className="w-16 rounded-full" />
                  )}
                </div>
                <h1 className=" text-xl text-orange-400 flex justify-center">
                  {user.displayName}
                </h1>
                <div className="flex justify-center">
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-outline btn-warning"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button className="btn btn-sm btn-outline btn-warning">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
