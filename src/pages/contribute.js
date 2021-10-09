import * as React from "react";
import Layout from "../components/Layout";

const ContributePage = () => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <title>Contribute | NovelRT</title>
            <Layout>
                <div id="main-branding" className="flex flex-col items-center py-12 md:px-12 lg:px-36 xl:px-46 2xl:px-64 bg-gradient-to-b from-green-400 via-blue-500 to-indigo-600">
                    <h1 className="my-4 text-5xl tracking-wide">
                        How to contribute.
                    </h1>
                    <h2 className="text-lg mx-16 xl:w-1/2 text-center">
                        NovelRT is under active development as we continue to enhance the 2D/Visual Novel development experience. With that said, here are a few ways you can contribute:
                    </h2>
                    <div id="features" className="flex flex-col gap-12 xl:grid xl:grid-cols-3 xl:gap-x-20 mt-20 mx-20 md:mx-28 xl:mx-36">
                        <a href="#issue" className="flex flex-col items-center">
                            <div className="bg-gray-100 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                                <div className="text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">Report an issue</h3>
                        </a>
                        <a href="#pr" className="flex flex-col items-center">
                            <div className="bg-gray-100 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                                <div className="text-gray-800 flex items-center justify-center h-full py-4">
                                    <svg className="w-10 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Git Pull Request</title><circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M128 144v224M288 160l-64-64 64-64" /><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" /><circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" /><path d="M240 96h84a60 60 0 0160 60v212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" /></svg>
                                </div>
                            </div>
                            <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">Create a Pull Request</h3>
                        </a>
                        <a href="#reach-out" className="flex flex-col items-center">
                            <div className="bg-gray-100 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                                <div className="text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">Reach out to us</h3>
                        </a>
                    </div>
                </div>

                <div id="secondary-branding" className="flex flex-col gap-16 xl:gap-20 items-center py-28 md:px-12 lg:px-36 xl:px-46 2xl:px-64 mx-24 md:mx-36 xl:mx-64 text-gray-800">
                    <div id="issue" className="flex flex-col xl:flex-row items-center xl:flex xl:items-center">
                        <div className="xl:mx-12">
                            <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">Report an issue</h3>
                            <p className="mt-2 text-center xl:text-left">
                                Running into a reproducible bug? Please feel free to <a className="underline hover:text-gray-500 duration-300" href="https://github.com/NovelRT/NovelRT/issues" target="_blank">open an issue on our GitHub repository</a>! We'd love to be able to resolve your problem.
                            </p>
                        </div>
                    </div>
                    <div id="pr" className="flex flex-col xl:flex-row items-center xl:flex xl:items-center">
                        <div className="xl:hidden">
                            <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 w-16 h-16 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Git Pull Request</title><circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224M288 160l-64-64 64-64" /><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M240 96h84a60 60 0 0160 60v212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">Create a Pull Request</h3>
                            <p className="mt-2 text-center xl:text-left">
                                Want to help out the NovelRT project? Thanks! We appreciate all the help we can get. To get started, <a className="underline hover:text-gray-500 duration-300" target="_blank" href="https://github.com/novelrt/NovelRT/labels/good%20first%20issue">simply have a look at our good first issues</a> and get involved!
                            </p>
                        </div>
                        <div className="hidden xl:block xl:mx-12">
                            <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                                <div className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Git Pull Request</title><circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224M288 160l-64-64 64-64" /><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M240 96h84a60 60 0 0160 60v212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="reach-out" className="flex flex-col xl:flex-row items-center xl:flex xl:items-center">
                        <div className="xl:mx-12">
                            <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">Reach out to us</h3>
                            <p className="mt-2 text-center xl:text-left">
                                Feeling stuck? Don't know where to start? Have some questions? <a className="underline hover:text-gray-500 duration-300" target="_blank" href="https://discord.novelrt.dev/">Join our Discord server</a> where our contributors will happily help you.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default ContributePage;
