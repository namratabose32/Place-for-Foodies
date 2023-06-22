import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
function filterData(searchText,restaurants){
    const filterData= restaurants.filter((restaurant) => 
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}



const Body=()=> {
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    
    useEffect(()=>{
        getRestaurants();
    },[]);
    
    async function getRestaurants(){
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        //console.log(json);
        setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestaurants)
        return null;
    
    return (allRestaurants.length === 0) ? (<Shimmer/>): (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                ></input>
                <button
                    className="search-btn"
                    onClick={() =>{
                        //filter data
                        const data = filterData(searchText,allRestaurants);
                        setFilteredRestaurants(data); 
                    }}
                > Search</button>
            </div>
            <div className="restaurant-list">
                {
                filteredRestaurants.map((restaurant) => {
                    return (filteredRestaurants==0)? <h1>namrata</h1> : (
                        <RestaurantCard  key={restaurant.data.id} {...restaurant.data} />
                    );
                })}
            </div>
        </>
    )
}
export default Body;