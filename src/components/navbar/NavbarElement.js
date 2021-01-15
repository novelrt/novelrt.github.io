import React, { Component } from "react";

class NavbarElement extends Component {
    render() {
        return (
            <li className="block mt-4 md:inline-block md:mt-0 mr-4">
                <a id={this.props.name} href={this.props.linksTo}
                    className="text-lg md:text-2xl hover:text-gray-400 duration-300">
                    {this.props.name}
                </a>
            </li>
        )
    }
}

export default NavbarElement;