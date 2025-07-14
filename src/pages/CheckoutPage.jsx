import React, { useState } from "react";
import { useCart } from "../global/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 10 : 0; // Flat rate shipping
  const total = subtotal + shipping;

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#fef9f5] p-6 mt-20">
      <h1 className="text-3xl font-bold text-center text-[#6b3801] mb-8">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 bg-white p-6 rounded shadow-md space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-3 rounded w-full sm:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="State"
                className="border p-3 rounded w-full"
              />
              <input
                type="number"
                placeholder="Zip Code"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Country"
                className="border p-3 rounded w-full sm:col-span-2"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <select className="w-full border p-3 rounded">
              <option>Credit / Debit Card</option>
              <option>PayPal</option>
              <option>Apple Pay</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4 max-h-[300px] overflow-y-auto text-sm">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {showSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-center">
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  Success!
                </h2>
                <p className="text-gray-700">
                  Your order has been placed successfully.
                </p>
                <button
                  className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                  onClick={() => {setShowSuccess(false), clearCart(), navigate("/")}} 
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowSuccess(true)}
            className="mt-6 w-full bg-[#6b3801] text-white py-3 rounded cursor-pointer hover:bg-[#522b01]"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
