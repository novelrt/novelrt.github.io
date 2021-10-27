import * as React from "react";
import { ExclamationCircleIcon, ChatIcon } from "@heroicons/react/outline";
import PullRequestIcon, {
    PrIconThin,
} from "../components/icons/PullRequestIcon";
import Layout from "../components/Layout";
import Feature from "../components/Feature";
import FeaturesRow from "../components/FeaturesRow";
import Hero from "../components/Hero";
import {
    ChatIconThin,
    ExclamationCircleIconThin,
} from "../components/icons/HeroiconsThinOutlineIcons";
import DetailedFeatures from "../components/DetailedFeatures";

const ContributePage = () => {
    const detailedFeatures = [
        {
            id: "issue",
            icon: <ExclamationCircleIconThin />,
            title: "Report an issue.",
            content: (
                <>
                    Running into a reproducible bug? Please feel free to&nbsp;
                    <a
                        className="underline hover:text-gray-500 duration-300"
                        href="https://github.com/NovelRT/NovelRT/issues"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open an issue on our GitHub repository
                    </a>
                    ! We&apos;d love to be able to resolve your problem.
                </>
            ),
        },
        {
            id: "pr",
            icon: <PrIconThin />,
            title: "Create a Pull Request.",
            content: (
                <>
                    Want to help out the NovelRT project? Thanks! We appreciate
                    all the help we can get. To get started,&nbsp;
                    <a
                        className="underline hover:text-gray-500 duration-300"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/novelrt/NovelRT/labels/good%20first%20issue"
                    >
                        simply have a look at our good first issues
                    </a>
                    &nbsp;and get involved!
                </>
            ),
        },
        {
            id: "reach-out",
            icon: <ChatIconThin />,
            title: "Reach out to us.",
            content: (
                <>
                    Feeling stuck? Don&apos;t know where to start? Have some
                    questions?&nbsp;
                    <a
                        className="underline hover:text-gray-500 duration-300"
                        target="_blank"
                        rel="noreferrer"
                        href="https://discord.novelrt.dev/"
                    >
                        Join our Discord server
                    </a>
                    &nbsp;where our contributors will happily help you.
                </>
            ),
        },
    ];

    return (
        <main className="bg-gray-100 min-h-screen">
            <title>Contribute | NovelRT</title>
            <Layout>
                <Hero
                    title="How to contribute."
                    description="NovelRT is under active development as we continue to enhance the 2D/Visual Novel development experience. With that said, here are a few ways you can contribute:"
                >
                    <FeaturesRow>
                        <Feature
                            featureIcon={<ExclamationCircleIcon />}
                            featureName="Report an issue"
                            linksTo="#issue"
                        />
                        <Feature
                            featureIcon={<PullRequestIcon />}
                            featureName="Create a Pull Request"
                            linksTo="#pr"
                        />
                        <Feature
                            featureIcon={<ChatIcon />}
                            featureName="Reach out to us"
                            linksTo="#reach-out"
                        />
                    </FeaturesRow>
                </Hero>

                <DetailedFeatures features={detailedFeatures} />
            </Layout>
        </main>
    );
};

export default ContributePage;
