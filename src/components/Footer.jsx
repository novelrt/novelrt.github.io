import React, { Component } from "react";
import DiscordIcon from "./icons/DiscordIcon";
import GitHubIcon from "./icons/GithubIcon";

const Footer = () => (
    <footer className="bg-gray-800 py-12 px-10 md:px-12 lg:px-36 xl:px-46 2xl:px-64">
        <div className="md:flex">
            <div>
                <a href="/" className="font-logo text-3xl">
                    NovelRT
                </a>
                <p className="text-gray-400 w-88">
                    A cross-platform 2D game engine accompanied by a strong
                    toolset for visual novels.
                </p>
            </div>
            <div id="socials" className="mt-4 ml-auto flex">
                <a
                    href="https://discord.novelrt.dev/"
                    className="w-12 h-12 hover:text-gray-400 duration-300"
                >
                    <DiscordIcon />
                </a>
                <a
                    href="https://github.com/novelrt"
                    className="w-10 h-10 ml-3 hover:text-gray-400 duration-300"
                >
                    <GitHubIcon />
                </a>
            </div>
        </div>
        <div className="border-t border-gray-700 my-6" />
        <p className="text-center text-gray-400">
            Copyright © Matt Jones and Contributors. Licensed under the MIT
            Licence (MIT).
        </p>
    </footer>
);

export default Footer;
