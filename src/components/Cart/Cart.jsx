
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const selectedItems = props.selectedItems;
    const clearCartHandle = props.clearCartHandle;

    //calculated cart total items
    let totalPrice = 0;
    let totalaShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalaShipping = totalaShipping + product.shipping;
    }
    //7% tax of total price
    const tax = totalPrice*7/100;
    //calculate grand total
    const grandTotal = totalPrice + totalaShipping + tax;

    return (
        <div>
          <h2 className="cart-title">Order Summary</h2>
          <p>Selected Items: {selectedItems}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Shipping Charge: ${totalaShipping}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
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