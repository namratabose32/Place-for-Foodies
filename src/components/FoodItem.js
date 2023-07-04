import { IMG_URL } from "../constants";

const FoodItem = ({
    imageId,
    price,
    name,
    itemAttribute,
  }) =>{
    return (
        <>
        <div className="card" >
            <img src={IMG_URL + imageId} />
            <h2>Name : {name}</h2>
            <h3>Price : {price}</h3>
            {/* <p>{itemAttribute.vegClassifier}</p> */}
        </div>
        </>
    )
}
export default FoodItem;