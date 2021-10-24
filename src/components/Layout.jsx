import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => (
    <div className="text-gray-100">
        <Navbar />
        {children}
        <Footer />
    </div>
);

export default Layout;
