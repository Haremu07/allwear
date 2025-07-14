import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // // ✅ Get current user's ID from localStorage
  // const getCurrentUserId = () => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   return storedUser?.id || "guest"; // fallback to 'guest'
  // };

  const getCurrentUserId = () => {
    const user = JSON.parse(localStorage.getItem("user")); // <-- Match the login key
    return user?.id || "guest";
  };
  const userId = getCurrentUserId();

 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  // ✅ Load cart for the current user on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(`cart_${userId}`);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [userId]);

  // ✅ Save cart to localStorage for this user when cart changes
  useEffect(() => {
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
  }, [cartItems, userId]);

  // ✅ Check login state on app load
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser) {
  //     setIsLoggedIn(true);
  //     setUser(storedUser);
  //   }
  // }, []);

  // ✅ Handle login
  const handleLogIn = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
  };

  // ✅ Handle logout
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    setCartItems([]); // Optional: clear cart on logout
  };

  // ✅ Cart logic
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
        handleLogIn,
        handleLogOut,
        user,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
