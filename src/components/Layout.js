import React from "react";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className="text-gray-100">
            <Navbar />
            {children}
        </div>
    )
}