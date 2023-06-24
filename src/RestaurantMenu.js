import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import { IMG_URL, swiggy_menu_api_URL } from "./constants";

const RestaurantMenu = () =>{
    // to read dynamic url params
    const {id}=useParams();
    const [restaurant,setRestaurant]=useState({});
    const [menu,setMenu]=useState({});
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(swiggy_menu_api_URL +id);
        const json=await data.json();
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setRestaurant(json.data.cards[0].card.card.info);
        setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }

    

    return (
        <div className="menu">
            <div>
                <h3>Restaurant id : {id}</h3>
                <h1>{restaurant?.name}</h1>
                <img src={IMG_URL+restaurant.cloudinaryImageId}/>
                <h3>City : {restaurant?.city}</h3>
                <h3>Area : {restaurant?.areaName}</h3>
                <h3>Ratings : {restaurant?.avgRating}</h3>
                <h3>Cost for two : {restaurant?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>{
                    ((menu.length)==0)?
                    <h3>No menu available</h3>:(
                    Object.values(menu).map((item)=>(
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))  ) 
                }</ul>
                {/* {console.log(Object.values(menu))} */}
            </div>
        </div>
    )
}
export default RestaurantMenu;