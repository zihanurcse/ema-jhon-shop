
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Order = () => {
  const storedProducts = useLoaderData();
  console.log(storedProducts);  

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          <h1>Stored products: {storedProducts.length}</h1>
        </div>
        <div className="cart-container">
          <Cart cart={storedProducts} ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
