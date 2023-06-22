import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./components/About";
import Error from "./Error";
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
        <div>
            <Header />
            <Body/>
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        errorElement: <Error/>,
    },
    {
        path:"/About",
        element : <About/>
    }
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);