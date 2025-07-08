import React from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import man from "./src/assets/man6.png"
import women from "./src/assets/woman1.png"
import kid from "./src/assets/kid1.png"

const Categories = () => {
    const navigate = useNavigate()
    

  return (
    <div className="h-[550px] w-full flex flex-col">
      <div className="flex justify-center items-center w-full h-15 mt-10 ">
        <h1 className="text-3xl text-amber-950">Shop by Categories</h1>
      </div>
      <div className="w-full h-auto flex mt-10 md:mt-0 justify-center gap-7 flex-col md:flex-row  items-center">
        <Cards onClick={() => navigate('/category/men')} img={man} text="Men's Wear" />
        <Cards onClick={() => navigate('/category/women')} img={women} text="Women's Wear" />
        <Cards onClick={() => navigate('/category/kids')} img={kid} text="Kid's Wear" />
      </div>
    </div>
  );
};

export default Categories;
