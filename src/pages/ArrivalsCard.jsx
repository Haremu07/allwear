import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../global/CartContext";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const ArrivalsCard = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCart();
  console.log("the id is:", id);

  const baseUrl = "https://mocki.io/v1/ce51d8b2-63e3-485a-bdb6-799da7cb4755";

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        setProduct(response.data.slice(0, 19));
        console.log("Image URL:", product.image);
        console.log("feached product", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleProducts();
  }, []);

  // const notify = () => toast("Added to cart");

  return (
    <div className="w-full h-auto flex justify-center   sm:gap-3 gap-5 text-[#6b3801]  flex-wrap">
      <ToastContainer />
      {product?.map((products, index) => (
        <motion.div
          // initial={{ opacity: 0, y: 20 }} 
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.4, delay: index * 0.1 }} 
          key={index}
          onClick={() => navigate(`/details_page/${products.id}`)}
          className="relative group bg-red-00 w-40 sm:w-60 h-70 flex  flex-col items-center justify-center cursor-pointer "
        >
          <button
            onClick={(e) => {
              e.stopPropagation(), addToCart(products);
            }}
            className="absolute top-40 cursor-pointer p-3 text-white bg-green-600  opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add To Cart
          </button>
          <div className="w-full h-55 rounded-xl  bg-[#4e2b04] bg-center">
            <img
              className="w-full h-full rounded-xl  object-cover"
              src={
                products?.image || "https://placehold.co/300x400?text=AllWear"
              }
              alt={products.name}
            />
          </div>
          <h3>{products.name}</h3>
          <h3>${products?.price}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default ArrivalsCard;
