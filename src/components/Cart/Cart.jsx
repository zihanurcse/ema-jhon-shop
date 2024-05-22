
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Cart.css'

const Cart = ({cart, clearCartHandle, }) => {
    return (
        <div>
            <h2>Order Summary</h2>
          <p>Selected Items: {cart}</p>
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
    );
};

export default Cart;