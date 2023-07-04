import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () =>{
    // to read dynamic url params
    const {id}=useParams();
    
    const {restaurant,menu} = useRestaurant(id);
    const dispatch=useDispatch();

    const addFoodItem=(item)=>{
        dispatch(addItem(item));
    }

    return (
        <div className="menu">
            <div>
                <h3>Restaurant id : {id}</h3>
                <h1>{restaurant?.name}</h1>
                <img src={IMG_URL+restaurant.cloudinaryImageId}/>
                <h3>City : {restaurant?.city}</h3>
                <p>Area : {restaurant?.areaName}</p>
                <h3>Ratings : {restaurant?.avgRating}</h3>
                <h3>Cost for two : {restaurant?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>{menu?
                    ((menu.length)==0)?
                    <h3>No menu available</h3>:(
                    Object.values(menu).map((item)=>(
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - <button className="btn" onClick={()=>{addFoodItem(item?.card?.info)}}>Add</button>
                            </li>
                    ))  ) :(<h3>Loading menu.....</h3>)
                }</ul>
                {/* {console.log(Object.values(menu))} */}
            </div>
        </div>
    )
}
export default RestaurantMenu;