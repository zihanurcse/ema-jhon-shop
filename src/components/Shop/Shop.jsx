import { useState } from "react";
import Header from "../Header/Header";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const cartItemHandle = () => {
    console.log("add");
    const newCartItem = cart + 1;
    setCart(newCartItem);
  };

  const clearCartHandle = () =>{
    const deleteCart = confirm("Are you sure ?")
    if(deleteCart){
        setCart(0)
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
          <Cart cart={cart} clearCartHandle={clearCartHandle}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
