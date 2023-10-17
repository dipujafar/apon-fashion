import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5 ">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className=" w-full btn btn-outline btn-warning"
          />
          <fieldset className="mt-5 border rounded border-orange-400 p-2">
            <legend className="text-center text-xl text-orange-400">
              LOGIN WITH
            </legend>
            <button className="">
              <BsGoogle className="text-2xl text-blue-500"></BsGoogle>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
