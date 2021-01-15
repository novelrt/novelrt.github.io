import React from "react";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="px-10 md:px-12 lg:px-36 xl:px-46 2xl:px-64">        
                {children}
            </div>
        </div>
    )
}