import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { singInWithGoogle, singInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    //singIn user
    singInUser(email, password)
      .then(() => {
        toast("successfully login");
      })
      .catch((error) => setError(error.message));
  };

  //login with google
  const handleGoogleSing = () => {
    singInWithGoogle()
      .then(() => {
        toast.success("Success Login with Google");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="mt-5 md:mt-20 ">
      <div className="md:w-2/6 mx-auto border bg-gray-950 rounded shadow-lg shadow-gray-200 p-5">
        <h1 className="text-2xl font-medium mb-5 text-orange-400">
          LOGIN TO APON FASHION
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex items-center mb-5 ">
            <label>
              <AiOutlineMail className="text-2xl"></AiOutlineMail>
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5 relative">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id=""
              placeholder="Password"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
            <span onClick={() => setShow(!show)} className="absolute right-10">
              {show ? (
                <AiOutlineEye className="text-2xl"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
              )}
            </span>
          </div>
          <input
            type="submit"
            value="Login"
            className=" w-full btn btn-outline btn-warning"
          />
          <p>
            Do not have account?{" "}
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </p>
          <p className="text-xl text-red-700">{error}</p>
          <fieldset className="mt-5 border rounded border-orange-400 p-2">
            <legend className="text-center text-xl text-orange-400">
              LOGIN WITH
            </legend>
            <button onClick={handleGoogleSing}>
              <BsGoogle className="text-2xl text-blue-500"></BsGoogle>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
