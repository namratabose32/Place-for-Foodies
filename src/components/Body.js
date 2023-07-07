import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import userContext from "../../utils/userContext";

const Body=()=> {
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const {user,setUser}=useContext(userContext);
    useEffect(()=>{
        getRestaurants();
    },[]);
    
    async function getRestaurants(){
        const time=new Date().getHours();
        const minutes = new Date().getMinutes();
        // List of restaurants fetched from api
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3437657&lng=85.3149142&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        // console.log(json.data);

        if ((time === 23 && minutes >= 45) || (time >= 0 && time < 7)){  // 0 is midnight
            setAllRestaurants(json.data?.cards[0]?.data?.data?.cards);
            setFilteredRestaurants(json.data?.cards[0]?.data?.data?.cards);
        }else{
            setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards); 
        }

        // For hard code data if api not working properly
        // const json = restaurantList;
        // setAllRestaurants(json);
        // setFilteredRestaurants(json);
    }

    const online =useOnline();

    if(!online){
        return(
            <h1>Offline, Please check your internet connection.</h1>
        )
    }

    if(!allRestaurants)
        return null;
    // console.log(allRestaurants.length);
    return (allRestaurants?.length === 0) ? (<Shimmer/>): (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        // console.log(e.target.value);
                        // console.log(restaurant.data)
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            const data = filterData(searchText,allRestaurants);
                            setFilteredRestaurants(data);
                            placeholder="Search"
                            setSearchText("");
                        }
                    }}
                ></input>
                <button
                    className="search-btn"
                    onClick={() =>{
                        //filter data
                        const data = filterData(searchText,allRestaurants);
                        setFilteredRestaurants(data); 
                        placeholder="Search"
                        setSearchText("");
                    }}
                >Search
              </button>
              {/* <input value={user.name}
                onChange={e=>setUser({
                    ...user,
                    name: e.target.value,
                })}
              ></input>
              <input value={user.email}
                onChange={e=>setUser({
                    ...user,
                    email: e.target.value,
                })}
              ></input> */}
            </div>
            <div className="restaurant-list">
                {(filteredRestaurants.length==0)? <h1>No restaurant found.....</h1>:
                filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    );
                })}
            </div> 
        </>
    )
}
export default Body;