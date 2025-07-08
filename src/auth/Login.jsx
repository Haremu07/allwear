import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  return (
    <div className="h-screen p-5 bg-[#7A5A26] flex gap-5">
      
      <div className="flex-1 h-auto items-center justify-center bg-transparent bg-amber-00 rounded-lg shadow-md flex flex-col p-5   text-white text-xl">
        <div className="w-full h-15  flex  mb-20  ">
               <h1
          onClick={() => nav('/')}
          className={`text-2xl text-white font-bold cursor-pointer`} 
        >
          {/* ALLWEAR */}
        </h1>
        </div>

        <h1 className="w-full h-15   flex justify-center items-center text-3xl">
          {" "}
          Sign In
        </h1>
        <form className="w-full h-auto bg-green-00 mb-30 flex flex-col gap-7">
        
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="gmail"
            placeholder="Gmail"
          />
          
          <input
            className="w-full h-10 border-b-2 outline-none  border-white border-dotted"
            type="password"
            placeholder="Password"
          />
        
          <button
            onClick={() => nav("/")}
            className="w-full h-15  cursor-pointer rounded-2xl bg-white text-black"
          >
            Sign In
          </button>
          <p className="flex justify-center gap-3">
            Don't have an account?{" "}
            <span className=" cursor-pointer text-[#31240f]" onClick={() => nav("/register")}>
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
