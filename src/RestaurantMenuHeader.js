import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenuHeader=()=>{
    const {id}=useParams();
    const {restaurant} = useRestaurant(id);
    console.log(restaurant);
    return (
        <>
            <div className="menuHeader">
                {/* <h3 >Restaurant id : {id}</h3> */}
                <img className="RestImg" src={IMG_URL+restaurant.cloudinaryImageId}/>
                <div className="head">
                <h1>{restaurant?.name}</h1>
                <h3>Location : {restaurant?.areaName}, {restaurant?.city}</h3>
                <h3>Ratings : {(restaurant?.avgRating)?restaurant.avgRating:"Too few ratings"}</h3>
                {/* <h3>Cuisines : {restaurant?.cuisines.join(" , ")}</h3> */}
                <h3>Cost : {restaurant?.costForTwoMessage}</h3>
                </div>
                {/* <div className="head1">
                    <h2>Discounts :</h2>
                    <h4>{Object.values(restaurant?.aggregatedDiscountInfo?.descriptionList).map((discount)=>(
                        <p>{discount.meta}</p>
                    ))}</h4>
                </div> */}
            </div>
        </>
    );
}
export default RestaurantMenuHeader;