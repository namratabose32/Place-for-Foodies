import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.price); // Access the totalPrice from the cart state
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <>
      {/* <h1>Cart Items - {cartItems.length}</h1> */}
      
      <div className="master-container">
        <div className="card cart">
          <label className="title">Your cart</label>
          <button className="btn" onClick={handleClearCart}>
        Clear cart
      </button>
          <div className="products">
            <div className="menu">
              {(cartItems.length==0)?<h1>Your cart is empty......</h1> :
              cartItems.map((item) => (
                <FoodItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="card checkout">
          <label className="title">Checkout</label>
          <div className="details">
            <span>Your cart subtotal:</span>
            <span>Rs. {total}</span>
            <span>Shipping fees:</span>
            <span>Rs. 30</span>
          </div>
          <div className="checkout--footer">
            <label className="price">
              <sup>Rs</sup>{(total)? total+30:0 }{/* Display the total price */}
            </label>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
