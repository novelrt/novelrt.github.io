import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className="text-gray-100">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}