import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate()
  return (
    <div className="h-screen p-5 bg-[#7A5A26] flex gap-5">
      <div
        className="hidden md:block md:w-1/2  h-full bg-[url('./assets/cloths.jpg')] 
    bg-cover bg-center bg-no-repeat rounded-lg shadow-md"
      ></div>

      <div className="flex-1 h-full bg-transparent bg-amber-00 rounded-lg shadow-md flex flex-col p-5  border border-white text-white text-xl">
        <div className="w-full h-15   flex justify-between  ">
          <div className="w-full h-15 bg-green-00">
                <h1
          onClick={() => nav('/')}
          className={`text-2xl text-white font-bold cursor-pointer`} 
        >
          ALLWEAR
        </h1>
          </div>
        </div>
        <h1 className="w-full h-15   flex justify-center items-center text-3xl">
          {" "}
          Sign Up
        </h1>
        <form className="w-full h-auto bg-green-00 flex flex-col gap-7">
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="gmail"
            placeholder="Gmail"
          />
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="number"
            placeholder="Phone Number"
          />
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="password"
            placeholder="Confirm Password"
          />
          <button  onClick={() => nav("/Login")} className="w-full h-13 rounded-2xl bg-white  cursor-pointer text-black">
            Sign Up
          </button>
          <p className="flex justify-end gap-1">
            Already have an account? <span className="cursor-pointer" onClick={() => nav("/Login")}> Log In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
