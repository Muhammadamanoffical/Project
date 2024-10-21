// eslint-disable-next-line no-unused-vars
import React, { children } from "react";
import Navbar from "../navbar";
import Footer from "../footer/Footer";


// eslint-disable-next-line react/prop-types
function Layout({children}){
    return(
        <div>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default Layout;