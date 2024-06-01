import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Shop from "../Shop/Shop";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path: "/",
          element: <Shop></Shop>
        }
      ]
    }
  ])
  
export default router;