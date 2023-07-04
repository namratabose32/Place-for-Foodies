import React, {lazy, Suspense, useState} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./Profile";
import Shimmer from "./components/Shimmer";
import Login from "./components/Login";
import Instamart from "./components/InstaMart";
import userContext from "../utils/userContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "../utils/store";
/**
 * Header
 *  -logo
 *  -Nav Items (right side)
 * 
 * Body
 *      -Search bar
 *      -Restraunt list
 *      -Restaurant Card
 *          -Image
 *          -Name
 *          -Ratings
 *          -Cusines
 * Footer
 *  -Links
 *  -Copyright
 */


// react components
// -Funtional - new    and  class based - OLD


//chunking OR code splitting OR dynamic bundling OR Lazy Loading OR on demand loading OR dynamic import
// const Instamart=lazy(()=> import("./components/InstaMart"));


const AppComponent=()=> {
    const [user,setUser]=useState({
        name:"Disha bose",
        email:"dishabose7979@gmail.com",
    });
    return(
        <Provider store={store}>
            <userContext.Provider 
                value={{
                    user:user,
                    setUser:setUser
                }}
            >
                <Header />
                <Outlet/>
                <Footer />
            </userContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        errorElement: <Error/>,
        children :[
            {
                path:"/",
                element:<Body/>,
            },
            {                
                path:"/about",
                element : <About/>,
                children:[
                    {
                        path: "profile",
                        element: <Profile/>,
                    },
                ]
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/instamart",
                element:
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>
            },
            {
                path: "/restaurant/:id",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
    },{
        path: "/login",
        element:<Login/>
    }
    
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);