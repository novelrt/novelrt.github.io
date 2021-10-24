import * as React from "react";
import { ExclamationCircleIcon, ChatIcon } from "@heroicons/react/outline";
import PullRequestIcon from "../components/icons/PullRequestIcon";
import Layout from "../components/Layout";
import Feature from "../components/Feature";
import FeaturesRow from "../components/FeaturesRow";
import Hero from "../components/Hero";

const ContributePage = () => (
    <main className="bg-gray-100 min-h-screen">
        <title>Contribute | NovelRT</title>
        <Layout>
            <Hero
                title="How to contribute."
                description="NovelRT is under active development as we continue to enhance the 2D/Visual Novel development experience. With that said, here are a few ways you can contribute:"
            >
                <FeaturesRow>
                    <Feature featureName="Report an issue" linksTo="#issue">
                        <ExclamationCircleIcon />
                    </Feature>
                    <Feature featureName="Create a Pull Request" linksTo="#pr">
                        <PullRequestIcon />
                    </Feature>
                    <Feature featureName="Reach out to us" linksTo="#reach-out">
                        <ChatIcon />
                    </Feature>
                </FeaturesRow>
            </Hero>

            <div
                id="secondary-branding"
                className="flex flex-col gap-16 xl:gap-20 items-center py-28 md:px-12 lg:px-36 xl:px-46 2xl:px-64 mx-24 md:mx-36 xl:mx-64 text-gray-800"
            >
                <div
                    id="issue"
                    className="flex flex-col xl:flex-row items-center xl:flex xl:items-center"
                >
                    <div className="xl:mx-12">
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
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">
                            Report an issue
                        </h3>
                        <p className="mt-2 text-center xl:text-left">
                            Running into a reproducible bug? Please feel free to
                            <a
                                className="underline hover:text-gray-500 duration-300"
                                href="https://github.com/NovelRT/NovelRT/issues"
                                target="_blank"
                                rel="noreferrer"
                            >
                                open an issue on our GitHub repository
                            </a>
                            ! We&apos;d love to be able to resolve your problem.
                        </p>
                    </div>
                </div>
                <div
                    id="pr"
                    className="flex flex-col xl:flex-row items-center xl:flex xl:items-center"
                >
                    <div className="xl:hidden">
                        <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 w-16 h-16 shadow">
                            <PullRequestIcon />
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">
                            Create a Pull Request
                        </h3>
                        <p className="mt-2 text-center xl:text-left">
                            Want to help out the NovelRT project? Thanks! We
                            appreciate all the help we can get. To get started,
                            <a
                                className="underline hover:text-gray-500 duration-300"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/novelrt/NovelRT/labels/good%20first%20issue"
                            >
                                simply have a look at our good first issues
                            </a>
                            and get involved!
                        </p>
                    </div>
                    <div className="hidden xl:block xl:mx-12">
                        <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                            <div className="flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon"
                                    viewBox="0 0 512 512"
                                >
                                    <title>Git Pull Request</title>
                                    <circle
                                        cx="128"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                        d="M128 144v224M288 160l-64-64 64-64"
                                    />
                                    <circle
                                        cx="128"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                    />
                                    <circle
                                        cx="384"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                    />
                                    <path
                                        d="M240 96h84a60 60 0 0160 60v212"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="reach-out"
                    className="flex flex-col xl:flex-row items-center xl:flex xl:items-center"
                >
                    <div className="xl:mx-12">
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
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">
                            Reach out to us
                        </h3>
                        <p className="mt-2 text-center xl:text-left">
                            Feeling stuck? Don&apos;t know where to start? Have
                            some questions?
                            <a
                                className="underline hover:text-gray-500 duration-300"
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.novelrt.dev/"
                            >
                                Join our Discord server
                            </a>
                            where our contributors will happily help you.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    </main>
);

export default ContributePage;
