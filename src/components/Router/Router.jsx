import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Shop from "../Shop/Shop";
import Order from "../Order/Order";
import Manage from "../Manage/Manage";
import Login from "../Login/Login";

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
            path: '/order',
            element: <Order></Order>
        },
        {
            path: '/manage',
            element: <Manage></Manage>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
      ]
    }
  ])

export default router;