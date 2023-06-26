import React from "react";
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
import Login from "./components/Login";
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






const AppComponent=()=> {
    return(
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
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
                path: "/restaurant/:id",
                element:<RestaurantMenu/>,
            },
        ],
    },{
        path: "/login",
        element:<Login/>
    }
    
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);