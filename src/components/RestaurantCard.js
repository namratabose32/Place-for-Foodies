import { IMG_URL } from "../constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) =>{
    return (
        <div className="card">
            <img src={IMG_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{area}</h4>
            <span>
                <h4 style={avgRating < 4 ? { backgroundColor: "red" } : { backgroundColor: "green" }}>
                    <i className="fa-solid fa-star"></i>
                        {avgRating}
                </h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div>
    )
}
export default RestaurantCard;