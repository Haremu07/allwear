import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./routes/First";
import LandingPage from "./pages/LandingPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Private from "./routes/Private";

const App = () => {
  const routes = createBrowserRouter([
    {
      element: <First />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "header",
          element: <Header />,
        },
        {
          path: "footer",
          element: <Footer />,
        },
        {
          path: "cart_page",
          element: <CartPage />,
        },
        {
          path: "*",
          element: <LandingPage />,
        },
        {
          path: "details_page/:id",
          element: <DetailsPage />,
        },
        {
          path: "category/:categoryName",
          element: <CategoryPage />,
        },
        {
          path: "checkout",
          element: (
            <Private>
              <CheckoutPage />
            </Private>
          ),
        },
      ],
    },

    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
