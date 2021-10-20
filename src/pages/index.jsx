import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

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
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                            <div className="text-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">
                            Cross-Platform
                        </h3>
                        <p className="mt-2 text-center text-lg xl:text-sm">
                            We make an active effort to bring NovelRT to as many
                            platforms as we can, so you can focus on building
                            your games. Right now we support Windows and Linux,
                            with Web, MacOS, iOS and Android being actively
                            developed!
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                            <div className="text-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">
                            Use what you love
                        </h3>
                        <p className="mt-2 text-center text-lg xl:text-sm">
                            C#, Ink, Lua, MoonScript or C++? The core of NovelRT
                            is written in C++ to give you the performance you
                            need, but we provide in-depth bindings for powerful
                            ecosystems like .NET. You can&apos;t find you
                            favorite language? Just contribute language bindings
                            yourself!
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                            <div className="text-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">
                            Built for modularity
                        </h3>
                        <p className="mt-2 text-center text-lg xl:text-sm">
                            NovelRT features a well-crafted multi-threaded
                            Entity Component System and promotes Data Oriented
                            Design so that your codebase scales with your
                            project. Batched rendering and high code reusability
                            are a core focus for us.
                        </p>
                    </div>
                </div>
            </div>
            <div
                id="secondary-branding"
                className="flex flex-col gap-16 xl:gap-20 items-center py-28 md:px-12 lg:px-36 xl:px-46 2xl:px-64 mx-24 md:mx-36 xl:mx-64 text-gray-800"
            >
                <div className="grid grid-cols-2 justify-center xl:flex-row items-center xl:flex xl:items-center">
                    <div className="xl:mx-12 justify-self-start">
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
                    <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-right xl:text-left text-3xl xl:text-4xl">
                        2D games made seamless.
                    </h3>
                    <div class="col-span-2">
                        <p className="mt-2 text-center xl:text-left">
                            NovelRT is built from the ground up to create 2D
                            games. The tooling is designed to support any kind
                            of 2D game you can imagine! From puzzlers,
                            metroidvanias, platformers, RTS games or even just
                            your average Tetris clone!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 xl:flex-row items-center xl:flex xl:items-center">
                    <div className="xl:hidden  place-self-end">
                        <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 w-16 h-16 shadow">
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
                    <h3 className="col-start-1 row-start-1 col-s mt-2 xl:mt-0 font-semibold xl:font-normal text-left xl:text-left text-3xl xl:text-4xl">
                        Write narratives. Not boilerplate.
                    </h3>
                    <div class="col-span-2">
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
