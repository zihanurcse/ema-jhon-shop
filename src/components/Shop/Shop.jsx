import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //fetch products here
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //get data from localStore
  useEffect(() => {
    const storedCart = getShoppingCart();
    const newSaveCart = [];
    //step:1 get id from localStore
    for (const id in storedCart) {
      //step:2 find product from db, using by id
      const matchProduct = products.find((pd) => pd.id === id);
      if (matchProduct) {
        //step:3 get quantity from localStore and set to db
        const quantity = storedCart[id];
        matchProduct.quantity = quantity;
        newSaveCart.push(matchProduct);
      }
    }
    setCart(newSaveCart);
  }, [products]);

  //add to cart handler
  const addCartHandle = (product) => {
    //added to cart products
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const clearCartHandle = () => {
    setCart([])
    deleteShoppingCart();
  };

  return (
    <div>
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
          <Cart cart={cart} clearCartHandle={clearCartHandle}>
            <Link to="/order" className="btn-review">
              <button >
                <span>Review Order</span>{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
