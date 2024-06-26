import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Shop from "../Shop/Shop";
import Order from "../Order/Order";
import Manage from "../Manage/Manage";
import Login from "../Login/Login";
import { cartProducts } from "../../loaders/cartProductsLoader";
import Register from "../Register/Register";
import Checkout from "../Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path: "/",
          element: <Shop></Shop>
        },
        {
            path: 'order',
            element: <Order></Order>,
            loader: () => cartProducts()
        },
        {
            path: 'checkout',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
            path: 'manage',
            element: <Manage></Manage>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
      },
      ]
    }
  ])

export default router;