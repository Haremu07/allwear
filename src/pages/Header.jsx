import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../global/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);
  const { cartItems, user, isLoggedIn, handleLogOut, handleDelete } = useCart();
  console.log("is log in", isLoggedIn);
  // Just below the function, for testing
  console.log("User after logout:", user);
  console.log("Logged in after logout:", isLoggedIn);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log("this is the user", user)

  return (
    <div className="w-full bg-[#B68B40] fixed top-0 z-50 text-[#e9dbcc] px-6 py-4">
      <div className="flex justify-between items-center">
        <h1
          onClick={() => {
            navigate("/"), setIsMenuOpen(false);
          }}
          className={`text-2xl font-bold cursor-pointer ${
            location.pathname === "/" ? "text-amber-950" : ""
          }`}
        >
          ALLWEAR
        </h1>

        <nav className="hidden md:flex gap-6 font-medium">
          <p
            onClick={() => navigate("/category/men")}
            className={`cursor-pointer hover:text-amber-950 ${
              isActive("/category/men") ? "text-amber-950" : ""
            }`}
          >
            MEN
          </p>
          <p
            onClick={() => navigate("/category/women")}
            className={`cursor-pointer hover:text-amber-950 ${
              isActive("/category/women") ? "text-amber-950" : ""
            }`}
          >
            WOMEN
          </p>
          <p
            onClick={() => navigate("/category/kids")}
            className={`cursor-pointer hover:text-amber-950 ${
              isActive("/category/kids") ? "text-amber-950" : ""
            }`}
          >
            KIDS
          </p>
        </nav>

        <div className="hidden md:flex gap-4">
          <p
            onClick={() => navigate("/cart_page")}
            className="cursor-pointer relative"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -left-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </p>

          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className={"cursor-pointer hover:text-amber-950 "}
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/register")}
                className={"cursor-pointer hover:text-amber-950 "}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              <span>Hi, {user?.fullName || "User"} </span>
              <button
                className="cursor-pointer hover:text-amber-950"
                onClick={() => {
                  handleLogOut();
                  setIsMenuOpen(false);
                  navigate("/login");
                }}
              >
                Logout
              </button>{" "}
              <button
                className="cursor-pointer hover:text-red-500"
                onClick={() => {
                  handleDelete();
                  setIsMenuOpen(false);
                  navigate("/login");
                }}
              >
                Delete Account
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <div className="relative">
            <p
              onClick={() => navigate("/cart_page")}
              className="cursor-pointer text-xl"
            >
              🛒
            </p>
            {cartCount > 0 && (
              <span className="absolute -top-2 -left-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          {!isLoggedIn ? (
            <span className="text-left">Hi, User</span>
          ) : (
            <span className="text-left">Hi, {user?.fullName}</span>
          )}
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 text-right flex flex-col gap-4 md:hidden text-base font-medium">
          <p
            onClick={() => {
              navigate("/category/men"), setIsMenuOpen(false);
            }}
            className={`cursor-pointer hover:text-amber-950 ${
              isActive("/category/men") ? "text-amber-950" : ""
            }`}
          >
            MEN
          </p>
          <p
            onClick={() => {
              navigate("/category/women"), setIsMenuOpen(false);
            }}
            className={`cursor-pointer hover:text-amber-950 ${
              isActive("/category/women") ? "text-amber-950" : ""
            }`}
          >
            WOMEN
          </p>
          <p
            onClick={() => {
              navigate("/category/kids"), setIsMenuOpen(false);
            }}
            className={`cursor-pointer hover:text-amber-950 ${
              isActive("/category/kids") ? "text-amber-950" : ""
            }`}
          >
            KIDS
          </p>
          <div className="flex flex-col gap-2 pt-2 items-end border-t border-[#e9dbcc]/20">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="text-left cursor-pointer hover:text-amber-950"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="text-left cursor-pointer hover:text-amber-950"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                {/* <span className="text-left">Hi, {user?.fullName}</span> */}
                <button
                  onClick={() => {
                    handleLogOut();
                    setIsMenuOpen(false);
                    navigate("/login");
                  }}
                  className="text-left cursor-pointer hover:text-amber-950"
                >
                  Logout
                </button>
                <button
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => {
                    handleDelete();
                    setIsMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Delete Account
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
