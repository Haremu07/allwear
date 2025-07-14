import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "../global/CartContext";

const Login = () => {
  const nav = useNavigate();
  const { handleLogIn } = useCart()
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!data.email || !data.password) {
    toast("Please fill all fields");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    toast("No user found. Please register first.");
    return;
  }

  if (
    data.email !== storedUser.email ||
    data.password !== storedUser.password
  ) {
    toast("Invalid email or password");
    return;
  }

  handleLogIn(storedUser);  


  toast("Login successful!");

  setTimeout(() => {
    nav("/");
    setData({
      email: "",
      password: "",
    });
  }, 2000);
};

  return (
    <div className="h-screen p-5 bg-[#7A5A26] flex gap-5">
      <div className="flex-1 h-auto items-center justify-center bg-transparent bg-amber-00 rounded-lg shadow-md flex flex-col p-5   text-white text-xl">
        <div className="w-full h-15  flex  mb-20  ">
          <ToastContainer />
          <h1
            onClick={() => nav("/")}
            className={`text-2xl text-white font-bold cursor-pointer`}
          >
            {/* ALLWEAR */}
          </h1>
        </div>

        <h1 className="w-full h-15   flex justify-center items-center text-3xl">
          {" "}
          Sign In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full h-auto bg-green-00 mb-30 flex flex-col gap-7"
        >
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            onChange={handleData}
            type="email"
            name="email"
            placeholder="Email"
          />

          <div className="relative w-full">
            <input
              className="w-full h-10 border-b-2 outline-none border-white border-dotted pr-10"
              type={showPassword ? "text" : "password"}
              onChange={handleData}
              name="password"
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 cursor-pointer text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-15  cursor-pointer rounded-2xl bg-white text-black"
          >
            Sign In
          </button>
          <p className="flex justify-center gap-3">
            Don't have an account?{" "}
            <span
              className=" cursor-pointer text-[#31240f]"
              onClick={() => nav("/register")}
            >
              {" "}
              Register
            </span>
          </p>
        </form>
      </div>
      <div
        className="hidden  w-full md:block md:w-1/2  h-full bg-[url('./assets/cloths.jpg')] 
    bg-cover bg-center bg-no-repeat rounded-lg shadow-md"
      ></div>
    </div>
  );
};

export default Login;
