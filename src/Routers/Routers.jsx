import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
    ],
  },
]);

export default routers;
