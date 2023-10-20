import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Update from "../Pages/Update/Update";
import Cart from "../Pages/Cart/Cart";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brandName",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/cart`),
      },
    ],
  },
]);

export default routers;
