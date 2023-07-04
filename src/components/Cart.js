import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem } from "../../utils/cartSlice";
const cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearItem());
    }
    return(
        <>
            <h1>Cart Items - {cartItems.length}</h1>
            <button className="btn" onClick={()=>handleClearCart()}
            >Clear cart</button>
            <div className="menu">
                {cartItems.map(item=> <FoodItem key={item.id}{...item}/>)}
            </div>
        </>
    )
}
export default cart;