//from restaurantMenu.js

import { useState,useEffect } from "react";
import { swiggy_menu_api_URL } from "../src/constants";
const useRestaurant =(id)=>{
    const [restaurant,setRestaurant]=useState({});
    const [menu,setMenu]=useState({});
    //get data from API
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(swiggy_menu_api_URL +id);
        const json=await data.json();
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setRestaurant(json.data.cards[0].card.card.info);
        console.log(json.data.cards[0].card.card.info);
        setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }

    //return restaurant data
    return {restaurant,menu};
}
export default useRestaurant;