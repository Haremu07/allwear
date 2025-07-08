import React from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate()
    

  return (
    <div className="h-[550px] w-full flex flex-col">
      <div className="flex justify-center items-center w-full h-15 mt-10 ">
        <h1 className="text-3xl text-amber-950">Shop by Categories</h1>
      </div>
      <div className="w-full h-auto flex mt-10 md:mt-0 justify-center gap-7 flex-col md:flex-row  items-center">
        <Cards onClick={() => navigate('/category/men')} img="./src/assets/man6.png" text="Men's Wear" />
        <Cards onClick={() => navigate('/category/women')} img="./src/assets/woman1.png" text="Women's Wear" />
        <Cards onClick={() => navigate('/category/kids')} img="./src/assets/kid1.png" text="Kid's Wear" />
      </div>
    </div>
  );
};

export default Categories;
