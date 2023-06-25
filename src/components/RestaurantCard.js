import { IMG_URL } from "../constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    slugs,
    deliveryTime,
  }) =>{
    return (
        <>
        <div className="book" >
            <p><b>Cuisines</b> : {cuisines.join(", ")}</p>
            <p><b>Location</b> : {slugs.city}, {area}</p>
            <p><b>Distance</b> : {lastMileTravelString}</p>
            <p><b>Delivery Time:</b> : {deliveryTime} minutes</p>
            <p><b>Cost for two</b> : {costForTwoString}</p>
            <p style={avgRating < 4 ? { backgroundColor: "red" } : { backgroundColor: "green" }}>
                        <i className="fa-solid fa-star"></i>
                           <b> Ratings </b>: {avgRating} stars
            </p>
            <div className="cover">
                <img src={IMG_URL + cloudinaryImageId} />
                <h2>{name}</h2>
            </div>
        </div>
        </>
    )
}
export default RestaurantCard;