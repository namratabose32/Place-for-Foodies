import { IMG_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem,addExistingItem,removeExistingItem } from "../../utils/cartSlice";
const FoodItem = ({
  imageId,
  id,
  price,
  name,
  defaultPrice,
}) => {
  const Price = price ? price : defaultPrice;
  const dispatch = useDispatch();
  const cartItems=useSelector((data)=>data.cart.items);
  const itemExists = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
  
    if (!itemExists) {
      dispatch(addItem({ imageId, price: Price, name,id,counter:1 }));
    } else {
      // setCounter(counter + 1); // Only increase the counter value
      dispatch(addExistingItem({ imageId, price: Price, name,id,counter:itemExists.counter+1 }));
    }    
  };

  const handleRemoveFromCart = () => {
    if(itemExists && itemExists.counter==1){
        dispatch(removeItem({ imageId, price: Price, name,id }));
    }else{
    // setCounter(counter - 1); // Decrease the counter value
    dispatch(removeExistingItem({ imageId, price: Price, name,id,counter:itemExists.counter-1 }));
    }
    
  };

  return (
    <>
      <div className="product1">
        
        <div className="quantity1">
        <img className="imageCart" src={IMG_URL + imageId} />
        <div>
          <span>{name}</span>
        </div>
        </div>
        <div className="quantity2">
          <button className="minusplus" onClick={handleRemoveFromCart}>
            <svg
              fill="none"
              viewBox="0 0 20 24"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#47484b"
                d="M20 12L4 12"
              ></path>
            </svg>
          </button>
          <label>{itemExists.counter}</label> {/* Display the counter value */}
          <button className="minusplus" onClick={handleAddToCart}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#47484b"
                d="M12 4V20M20 12H4"
              ></path>
            </svg>
          </button>
          <label className="price small">Rs. {Price / 100}</label>
        </div>
        
      </div>
    </>
  );
};

export default FoodItem;
