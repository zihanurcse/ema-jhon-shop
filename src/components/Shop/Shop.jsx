import { useState } from "react";
import Header from "../Header/Header";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const cartItemHandle = () => {
    console.log("add");
    const newCartItem = cartItem + 1;
    setCartItem(newCartItem);
  };

  const clearCartHandle = () =>{
    const deleteCart = confirm("Are you sure ?")
    if(deleteCart){
        setCartItem(0)
    }
  }

  return (
    <div>
      <Header></Header>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              cartItemHandle={cartItemHandle}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h2>Order Summary</h2>
          <p>Selected Items: {cartItem}</p>
          <p>Total Price: $00</p>
          <p>Total Shipping Charge: $00</p>
          <p>Tax: $00</p>
          <h4>Grand Total: $00</h4>
          <div className="cart-btn-container">
            <button onClick={()=>clearCartHandle()} className="btn-clear-cart">
              Clear Cart <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="btn-review-order">
              Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
