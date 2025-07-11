import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../global/CartContext";
import { toast, ToastContainer } from "react-toastify";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(`Product ID from URL:  , id`);
  const navigate = useNavigate()


  const baseUrl = "https://mocki.io/v1/ce51d8b2-63e3-485a-bdb6-799da7cb4755";

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const response = await axios.get(baseUrl);

        const selectedProduct = response.data.find(
          (p) => String(p.id) === String(id)
        );

        setProduct(selectedProduct);
        console.log(selectedProduct);
      } catch (error) {
        console.log(error);
      }
    };

    handleProduct();
  }, [id]);

  if (!product) return <p className="p-6 text-lg">Loading product...</p>;

  const {addToCart} = useCart()

  const notify = () => toast("Added to cart")
  return (
    <div className="min-h-screen  bg-[#cfb284] text-white mt-16 p-3 flex flex-col md:flex-row gap-3">
      <ToastContainer/>
      <div className="flex-1 h-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product?.image}
          alt={product?.name}
        />
      </div>

      <div className="flex-1 bg-amber-00 rounded-lg p-6  space-y-3">
        <h1 className="text-4xl font-bold">{product?.name}</h1>
        <p className="text-lg text-white/90">{product?.description}</p>
        <p className="text-2xl font-semibold text-white">${product?.price}</p>
       <div className="flex gap-3">
         <button
          onClick={() => {notify(),  addToCart(product)}}
        className="bg-green-700 text-white cursor-pointer py-2 px-4 mt-4 rounded hover:bg-green-800">
          Add to Cart
        </button>
        <button 
        onClick={() => navigate("/checkout")}
        className="bg-green-700 text-white cursor-pointer py-2 px-4 mt-4 rounded hover:bg-green-800">Proceed to Checkout</button>
       </div>
      </div>
    </div>
  );
};

export default DetailsPage;
