
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const selectedItems = props.selectedItems;
    const clearCartHandle = props.clearCartHandle;

    //calculated cart total items
    let totalaPrice = 0;
    let totalaShipping = 0;
    for (const product of cart) {
        totalaPrice = totalaPrice + product.price;
        totalaShipping = totalaShipping + product.shipping;
    }

    return (
        <div>
            <h2>Order Summary</h2>
          <p>Selected Items: {selectedItems}</p>
          <p>Total Price: ${totalaPrice}</p>
          <p>Total Shipping Charge: ${totalaShipping}</p>
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