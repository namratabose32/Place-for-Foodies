import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/userContext";
import {useSelector } from "react-redux/es/hooks/useSelector";
import store from "../../utils/store";
const Title=()=> (
    <a href="/">
        <img className="logo" alt="Food Villa"
        src ="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
        />
    </a>
);
const HeaderComponent= () => {
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const {user}=useContext(userContext);
    const cartItems=useSelector(store=> store.cart.items);
    console.log(cartItems);
    return (
        <div className="header">
            <ul>
                <li><Title/></li>
            </ul>
            <div className="nav-items">
                <ul>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/instamart">InstaMart</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart <sup>{cartItems.length}</sup></Link>
                    </li>
                    <li>
                    {/* {user.name} */}
                    {isLoggedIn ?

                        <button className="Btn"  onClick={()=> setIsLoggedIn(false)}>
                            <div className="sign">
                                <svg viewBox="0 0 512 512">
                                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                                </svg>
                            </div>
                            <div className="text">Logout</div>
                            
                        </button>
                        // <button className="login-btn" onClick={()=> setIsLoggedIn(false)}>Logout</button>:
                        :<Link to="/login" onClick={()=>setIsLoggedIn(true)}>
                        <button className="Btn" style={{backgroundColor: 'green'}} >
                            <div className="sign">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4857 20H19.4857C20.5903 20 21.4857 19.1046 21.4857 18V6C21.4857 4.89543 20.5903 4 19.4857 4H15.4857V6H19.4857V18H15.4857V20Z" fill="currentColor" /><path d="M10.1582 17.385L8.73801 15.9768L12.6572 12.0242L3.51428 12.0242C2.96199 12.0242 2.51428 11.5765 2.51428 11.0242C2.51429 10.4719 2.962 10.0242 3.51429 10.0242L12.6765 10.0242L8.69599 6.0774L10.1042 4.6572L16.4951 10.9941L10.1582 17.385Z" fill="currentColor" /></svg>
                            </div>
                            <div className="text">
                            Login
                            </div>
                        </button>
                        </Link>
                        // <button className="login-btn" onClick={()=> setIsLoggedIn(true)}>Login</button> 
                    }
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default HeaderComponent;