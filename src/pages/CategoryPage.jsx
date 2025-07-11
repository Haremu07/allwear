import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../global/CartContext";
import { toast, ToastContainer } from "react-toastify";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchAndFilter = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://mocki.io/v1/ce51d8b2-63e3-485a-bdb6-799da7cb4755"
        );
        const filtered = response.data.filter(
          (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setFilteredProducts(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchAndFilter();
  }, [categoryName]);

  const notify = () => toast("Added to cart")

  if (loading)
    return <p className="p-4 text-xl">Loading {categoryName} products...</p>;
  return (
    <div className="w-full mt-15  md:p-5 p-1 h-auto flex flex-col bg-[#cfb284]">
      <ToastContainer/>
      <h1 className="text-3xl mb-6 capitalize text-[#e9dbcc]  font-bold">
        {categoryName} Wears
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found for {categoryName}</p>
      ) : (
        <div className="flex justify-center  items-center gap-5 md:gap-5 flex-wrap">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/details_page/${product.id}`)}
              className="md:w-60 w-45 relative group rounded-xl  cursor-pointer text-[#6b3801] overflow-hidden"
            >
              <div className="relative rounded-xl  w-full h-60">
                <img
                  className="w-full h-full rounded-xl  object-cover bg-amber-900"
                  src={product.image}
                  alt={product.name}
                />
                <button 
                onClick={(e) => {e.stopPropagation(), notify(), addToCart(product)}}
                className="p-2 w-30 text-white bg-green-600 cursor-pointer absolute bottom-3 left-1/2 transform -translate-x-1/2 md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  Add To Cart
                </button>
              </div>
              <div className="flex justify-center items-center flex-col mt-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
