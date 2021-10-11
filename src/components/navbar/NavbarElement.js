import React, { Component } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
class NavbarElement extends Component {
    render() {
        return (
            <li className="block mt-4 md:inline-block md:mt-0 mr-4">
                <AniLink swipe 
                direction="left" 
                    id={this.props.name} 
                    to={this.props.linksTo}
                    className="text-lg md:text-2xl hover:text-gray-400 duration-300">
                    {this.props.name}
                </AniLink>
            </li>
        )
    }
}

export default NavbarElement;