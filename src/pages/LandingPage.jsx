import React from "react";
import Categories from "./Categories";
import ArrivalsCard from "./ArrivalsCard";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-auto overflow-x-hidden  bg-[#cfb284] ">
      <div className="w-full  h-[660px] bg-[#B68B40]  flex flex-col md:flex-row ">
        <div className="flex-1 hidden  md:flex justify-center  ">
          <img className="  mt-4" src="./src/assets/woman.png" alt="" />
        </div>
        <div className="flex-1/3 bg-amber-00 text-[#6b3801]  p-5 flex justify-center flex-col items-center gap-3">
          <h1 className="text-7xl">Elevate Everybody,</h1>
          <p className="text-2xl">For Him, Her, and The Little One.</p>
          <button
            onClick={() => navigate("/category/men")}
            className="p-3 w-30 hover:bg-[rgba(82,39,11,0.95)]  bg-[#52270bb4] text-[#ccc2b3] cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </div>
      <Categories />
      <div className="w-full mt-190 sm:mt-0 h-auto">
        <h1 className="flex justify-center items-center text-amber-950 text-3xl">
          NEW ARRIVALS
        </h1>
        <div className="h-full w-full flex  flex-wrap gap-10 p-3">
          <ArrivalsCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
