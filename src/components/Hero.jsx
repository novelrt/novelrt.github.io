import * as React from "react";

const Hero = ({ children, image, title, description }) => (
    <div
        id="hero"
        className="flex flex-col items-center py-12 md:px-12 lg:px-36 xl:px-46 2xl:px-64 bg-gradient-to-b from-green-400 via-blue-500 to-indigo-600"
    >
        {image}

        <h1
            className={`my-4 text-5xl tracking-wide text-center ${
                image ? "" : "mt-8"
            }`}
        >
            {title}
        </h1>
        <h2 className="text-lg px-4 my-6 max-w-prose my-6 xl:w-1/2 ">{description}</h2>

        {children}
    </div>
);

export default Hero;
