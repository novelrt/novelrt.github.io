import React, { Component } from "react";
import NavbarElement from "./NavbarElement";

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            menuOpened: false,
            elements: [
                {
                    name: "Home",
                    linksTo: "/"
                },
                {
                    name: "Documentation",
                    linksTo: "/docs"
                },
                {
                    name: "News",
                    linksTo: "/news"
                },
                {
                    name: "Contribute",
                    linksTo: "/contribute"
                }
            ]
        }
    }

    handleClick = () => {
        this.setState(state => ({
            menuOpened: !state.menuOpened
        }))
    }

    render() {
        let menuConditionalclassNames = this.state.menuOpened ? "" : "hidden"

        return (
            <nav className="flex justify-between flex-wrap py-5 px-10 md:px-12 lg:px-36 xl:px-46 2xl:px-64 bg-gray-700 text-gray-100">
                <a href="/" className="font-logo text-4xl">
                    NovelRT
                    </a>
                <div className="block md:hidden">
                    <button id="burger" onClick={this.handleClick}
                        className="flex items-center px-3 py-2 rounded-md bg-gray-100 text-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div id="menu" className={menuConditionalclassNames + " w-full md:flex md:w-auto mb-4 md:mb-0"}>
                    <ul className="navbar-elements">
                        <NavbarElement linksTo="/" name="Home" />
                        <NavbarElement linksTo="https://novelrt.github.io/NovelRT/" name="Documentation" />
                        <NavbarElement linksTo="/" name="News" />
                        <NavbarElement linksTo="/" name="Contribute" />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;