import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
    DesktopComputerIcon,
    CodeIcon,
    CubeTransparentIcon,
} from "@heroicons/react/outline";
import Layout from "../components/Layout";
import Feature from "../components/Feature";

// markup
const IndexPage = ({ data }) => (
    <main className="bg-gray-100 min-h-screen">
        <title>NovelRT</title>
        <Layout>
            <div
                id="main-branding"
                className="flex flex-col items-center py-12 md:px-12 lg:px-36 xl:px-46 2xl:px-64 bg-gradient-to-b from-green-400 via-blue-500 to-indigo-600"
            >
                <GatsbyImage
                    image={data.novelchan.childImageSharp.gatsbyImageData}
                    className="w-64"
                    alt="Novel-Chan: NovelRT's mascot!"
                />
                <h1 className="my-4 text-5xl tracking-wide">Meet NovelRT.</h1>
                <h2 className="text-lg mx-16 xl:w-1/2 text-center">
                    NovelRT is a low-ceremony multi-platform open source game
                    engine with a strong focus on 2D Game Development and
                    first-class support for Novel Game Development.
                </h2>
                <div
                    id="features"
                    className="flex flex-col gap-12 xl:grid xl:grid-cols-3 xl:gap-x-20 mt-20 mx-20 md:mx-28 xl:mx-36"
                >
                    <Feature
                        featureName="Cross-Platform"
                        featureDescription="We make an active effort to bring NovelRT to as many platforms as we can, so you can focus on building your games. Right now we support Windows and Linux, with Web, MacOS, iOS and Android being actively developed!"
                    >
                        <DesktopComputerIcon />
                    </Feature>
                    <Feature
                        featureName="Use what you love"
                        featureDescription="C#, Ink, Lua, MoonScript or C++? The core of NovelRT is written in C++ to give you the performance you need, but we provide in-depth bindings for powerful ecosystems like .NET. You can't find you favorite language? Just contribute language bindings yourself!"
                    >
                        <CodeIcon />
                    </Feature>
                    <Feature
                        featureName="Built for modularity"
                        featureDescription="NovelRT features a well-crafted multi-threaded Entity Component System and promotes Data Oriented Design so that your codebase scales with your project. Batched rendering and high code reusability are a core focus for us."
                    >
                        <CubeTransparentIcon />
                    </Feature>
                </div>
            </div>
            <div
                id="secondary-branding"
                className="flex flex-col gap-16 xl:gap-20 items-center py-28 md:px-12 lg:px-36 xl:px-46 2xl:px-64 mx-24 md:mx-36 xl:mx-64 text-gray-800"
            >
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 place-items-center">
                    <div className="xl:mx-12  justify-self-center">
                        <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.25}
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">
                            2D games made seamless.
                        </h3>
                        <p className="mt-2 text-center xl:text-left">
                            NovelRT is built from the ground up to create 2D
                            games. The tooling is designed to support any kind
                            of 2D game you can imagine! From puzzlers,
                            metroidvanias, platformers, RTS games or even just
                            your average Tetris clone!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 place-items-center">
                    <div className="xl:mx-12 justify-self-center xl:col-start-2 xl:col-end-3 xl:row-start-1">
                        <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.25}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="xl:col-start-1 xl:col-end-2  xl:row-start-1">
                        <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">
                            Write narratives. Not boilerplate.
                        </h3>
                        <p className="mt-2 text-center xl:text-left">
                            Tired of writing tools and burning out before you
                            can actually write your visual novel script? Do you
                            want a tool that has it integrated as part of the
                            platform? NovelRT is built to support your inner
                            playwright from the get go!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    </main>
);

export const query = graphql`
    {
        novelchan: file(relativePath: { regex: "/novel-chan/" }) {
            childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
        }
    }
`;

export default IndexPage;
