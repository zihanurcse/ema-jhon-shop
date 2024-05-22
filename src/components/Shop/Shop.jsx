import { useState } from "react";
import Header from "../Header/Header";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState(0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //add to cart handler
  const addCartHandle = (product) => {
    //total selected items
    const newSelectedItems = selectedItems + 1;
    setSelectedItems(newSelectedItems)
    //product added to cart
    const newCart = [...cart,product]
    setCart(newCart);
  };

  const clearCartHandle = () =>{
    console.log("delete items")
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
              addCartHandle={addCartHandle}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} selectedItems={selectedItems} clearCartHandle={clearCartHandle}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
