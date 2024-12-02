import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ProductsPage from "../layouts/productsPage/ProductsPage";
import ShoppingCart from "../layouts/shoppingCart/ShoppingCart";
import SignIn from "../layouts/signIn/SignIn";
import SignUp from "../layouts/signUp/SignUp";
;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path:"product-category/:categoryId",
        element: <ProductsPage />,
      },
      {
        path:"cart",
        element: <ShoppingCart />,
      }
    ],
  },
  { 
      path: "/sign-in",
      element: <SignIn />,
  },
  { 
    path: "/sign-up",
    element: <SignUp />,
  }
 
]);
