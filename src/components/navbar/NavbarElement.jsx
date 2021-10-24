import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavbarElement = ({ name, linksTo }) => (
    <li className="block mt-4 md:inline-block md:mt-0 mr-4">
        <AniLink
            swipe
            direction="left"
            id={name}
            to={linksTo}
            className="text-lg outline-none md:text-2xl hover:text-gray-400 duration-300"
        >
            {name}
        </AniLink>
    </li>
);

export default NavbarElement;
