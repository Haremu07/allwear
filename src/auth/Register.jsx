import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const nav = useNavigate();

  const [data, setData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate all fields
    if (
      !data.fullName.trim() ||
      !data.email.trim() ||
      !data.phoneNumber.trim() ||
      !data.password.trim() ||
      !data.confirmPassword.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (data.phoneNumber.length < 11) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Registration successful!");

    setTimeout(() => {
      nav("/Login");
    }, 2000);
  };

  return (
    <div className="h-screen p-5 bg-[#7A5A26] flex gap-5">
      <div
        className="hidden md:block md:w-1/2  h-full bg-[url('./assets/cloths.jpg')] 
    bg-cover bg-center bg-no-repeat rounded-lg shadow-md"
      ></div>

      <div className="flex-1 h-full bg-transparent rounded-lg shadow-md flex flex-col p-5  text-white text-xl">
        <div className="w-full h-15 flex justify-between">
          <ToastContainer />
          <div className="w-full h-15">
            <h1
              onClick={() => nav("/")}
              className="text-2xl text-white font-bold cursor-pointer"
            >
              ALLWEAR
            </h1>
          </div>
        </div>

        <h1 className="w-full h-15 flex justify-center items-center text-3xl">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
          <input
            className="w-full h-10 border-b-2 outline-none border-white border-dotted"
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleData}
            value={data.fullName}
          />
          <input
            className="w-full h-10 border-b-2 outline-none border-white border-dotted"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleData}
            value={data.email}
          />
          <input
            className="w-full h-10 border-b-2 outline-none border-white border-dotted"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleData}
            value={data.phoneNumber}
          />

          <div className="relative w-full">
            <input
              className="w-full h-10 border-b-2 outline-none border-white border-dotted pr-10"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleData}
              value={data.password}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 cursor-pointer text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative w-full">
            <input
              className="w-full h-10 border-b-2 outline-none border-white border-dotted pr-10"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleData}
              value={data.confirmPassword}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-2 cursor-pointer text-white"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-13 rounded-2xl bg-white cursor-pointer text-black"
          >
            Sign Up
          </button>

          <p className="flex justify-end gap-3">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-[#31240f]"
              onClick={() => nav("/Login")}
            >
              Log In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
