import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {

  const { name, img, price, seller, ratings } = props.product;
  const addCartHandle = props.addCartHandle;

  return (
    <div className="product">
      <div className="cart-body">
        {img ? (
          <img className="cart-img" src={img} alt="" />
        ) : (
          <span>Image Loading</span>
        )}
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <small className="seller-name">Manufacture: {seller}</small>
        <br />
        <small>Ratings: {ratings}</small>
      </div>
      <button onClick={()=>addCartHandle(props.product)} className="btn-add-cart">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
