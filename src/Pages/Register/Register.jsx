import { FcBusinessman } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
  const { singInWithGoogle, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    setError("");

    // set some condition
    if (password.length < 6) {
      setError("Your Password length Must be 6 character or logger!");
      return;
    }
    if (!/[A-Z][!@#$%^&*()_+{}|:;<>,.?~]/.test(password)) {
      setError(
        "Your password should have a capital letter and a special character!"
      );
      return;
    }

    //create user
    createUser(email, password)
      .then(() => {
        toast("Successfully Create User");
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
          REGISTER TO APON FASHION
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex items-center mb-5">
            <label>
              <FcBusinessman className="text-2xl"></FcBusinessman>
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5">
            <label>
              <HiOutlinePhotograph className="text-2xl"></HiOutlinePhotograph>
            </label>
            <input
              type="text"
              name="photo"
              id=""
              placeholder="Photo URL"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
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
          <div className="flex items-center mb-5 relative ">
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
            value="Register"
            className=" w-full btn btn-outline btn-warning"
          />
          <p>
            Already have account?{" "}
            <Link to="/login" className="btn btn-link">
              Login
            </Link>{" "}
          </p>
          <p className="text-xl text-red-700">{error}</p>
          <fieldset className="mt-5 border rounded border-orange-400 p-2">
            <legend className="text-center text-xl text-orange-400">
              LOGIN WITH
            </legend>
            <p onClick={handleGoogleSing}>
              <BsGoogle className="text-2xl text-blue-500 cursor-pointer"></BsGoogle>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
