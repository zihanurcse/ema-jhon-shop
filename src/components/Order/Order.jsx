import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const cartProduct = useLoaderData();
  const [cart, setCart] = useState(cartProduct);

  const handleDeleteToCart = (id) => {
    const remainingProduct = cartProduct.filter((pd) => pd.id !== id);
    setCart(remainingProduct);
    removeFromDb(id);
  };

  const clearCartHandle = () => {
    setCart([])
    deleteShoppingCart();
  };

  return (
    <div>
      <div className="shop-container">
        <div className="items-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleDeleteToCart={handleDeleteToCart}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} clearCartHandle={clearCartHandle}>
            <button className="btn-review-order">
              <span><Link to="/checkout">Proceed Checkout</Link></span> <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
