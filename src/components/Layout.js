import React from "react";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}