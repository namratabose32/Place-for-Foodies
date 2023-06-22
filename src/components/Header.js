import { useState } from "react";
import { Link } from "react-router-dom";
const Title=()=> (
    <a href="/">
        <img className="logo" alt="Food Villa"
        src ="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
        />
    </a>
);
const HeaderComponent= () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <div className="header">
            <Title/>
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
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                <div>
                    {isLoggedIn ?<button onClick={()=> setIsLoggedIn(false)}>Logout</button>:<button onClick={()=> setIsLoggedIn(true)}>Login</button> }
                </div>
            </div>
        </div>
    );
};
export default HeaderComponent;