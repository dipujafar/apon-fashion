import { FcBusinessman } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
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
        </form>
      </div>
    </div>
  );
};

export default Register;
