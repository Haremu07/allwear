import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("guest");

  // ✅ Get user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
      setUserId(storedUser.id || "guest"); // ✅ Set ID from user
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setUserId("guest"); // ✅ Always fallback
    }
  }, []);

  // ✅ Load cart for current userId
  useEffect(() => {
    if (!userId) return;

    const savedCart = localStorage.getItem(`cart_${userId}`);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [userId]);

  // ✅ Save cart when items or userId changes
  useEffect(() => {
    if (!userId) return;
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
  }, [cartItems, userId]);

  const handleLogIn = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
    setUserId(user.id || "guest");
  };

  const handleLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    setUserId("guest");
    setCartItems([]); // Optional: clear cart on logout
  };

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        isLoggedIn,
        setIsLoggedIn,
        handleLogIn,
        handleLogOut,
        user,
        setUser,
        userId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
