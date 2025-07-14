import { useCart } from "../global/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { addToCart, decreaseQuantity, cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const { isLoggedIn } = useCart()

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen mt-20 p-5 overflow-x-hidden  bg-[#fef9f5] text-[#6b3801]">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm text-left text-sm sm:text-base">
              <thead className="bg-[#cfb284] text-white">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-[#e0cdb8]">
                    <td className="px-4 py-3 font-medium">{item.name}</td>
                    <td className="px-4 py-3">${item.price}</td>
                    <td className="px-4 py-3">{item.quantity}</td>
                    <td className="px-4 py-3">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-3   space-x-4">
                      <div className="flex gap-1  sm:flex-row flex-col bg-red-00 w-[30px] sm:h-[30px] h-[90px]">
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-green-600  hover:bg-green-700 text-white px-2 cursor-pointer py-1 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white px-2 py-1 rounded"
                        >
                          -
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-2 py-1 rounded"
                        >
                          x
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between text-xl font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={() => {
              if (isLoggedIn) {
                navigate("/checkout");
              } else {
                navigate("/login");
              }
            }}
            className="mt-6 bg-green-700 text-white py-3 px-5 cursor-pointer rounded hover:bg-green-800"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
