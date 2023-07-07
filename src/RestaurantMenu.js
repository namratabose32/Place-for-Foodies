import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { addItem,addExistingItem } from "../utils/cartSlice";
import RestaurantMenuHeader from "./RestaurantMenuHeader";
const RestaurantMenu = () =>{
    // to read dynamic url params
    const {id}=useParams();
    
    const {menu} = useRestaurant(id);
    const dispatch=useDispatch();
    const cartItems=useSelector((data)=>data.cart.items);
    const addFoodItem=(item)=>{
        const id=item.id,name=item.name,Price=(item.price)?item.price:item.defaultPrice,imageId=item.imageId;
        const itemExists = cartItems.find((item) => item.id === id);
        if (!itemExists) {
        dispatch(addItem({ imageId, price: Price, name,id,counter:1 }));
        } else {
        dispatch(addExistingItem({ imageId, price: Price, name,id,counter:itemExists.counter+1 }));
        }  
    }

    return (
        <>
        <RestaurantMenuHeader/>
        <div className="menu">
            <div>
                <ul>{menu?
                    ((menu.length)==0)?
                    <h3>No menu available</h3>:(
                    
                        // <li key={item?.card?.info?.id}>
                        //     {item?.card?.info?.name} - <button className="btn" onClick={()=>{addFoodItem(item?.card?.info)}}>Add</button>
                        // </li>
                        <div className="master-container">
                            <div className="card cart">
                            {/* <h1 className="menuTitle">Menu</h1> */}
                                <label className="title">Menu</label>
                                <div className="products">
                                    <div className="menu">
                                    {console.log(menu)}
                                    {Object.values(menu).map((item)=>(
                                        <div className="product" key={item?.card?.info?.id}>
                                        {/* <img className="image" src={IMG_URL + imageId} /> */}
                                        <div>
                                          <span>{item?.card?.info?.name}</span>
                                        </div>
                                        <label className="price small">Rs. {(item?.card?.info?.price)?(item?.card?.info?.price/100):(item?.card?.info?.defaultPrice/100)}</label>
                                        <button className="btn" onClick={()=>{addFoodItem(item?.card?.info)}}>
                                            Add to cart
                                        </button>
                                      </div>
                                    
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                     ) :(<h3>Loading menu.....</h3>)
                }</ul>
                {/* {console.log(Object.values(menu))} */}
            </div>
        </div>
        </>
    )
}
export default RestaurantMenu;