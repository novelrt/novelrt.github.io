import * as React from "react";
import {
    DesktopComputerIcon,
    CodeIcon,
    CubeTransparentIcon,
} from "@heroicons/react/outline";
import {
    ArrowsExpandIconThin,
    BookOpenIconThin,
} from "../components/icons/HeroiconsThinOutlineIcons";
import Layout from "../components/Layout";
import NovelChan from "../components/NovelChan";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import FeaturesRow from "../components/FeaturesRow";
import DetailedFeatures from "../components/DetailedFeatures";

const IndexPage = () => {
    const detailedFeatures = [
        {
            id: "seamless-2d",
            icon: <ArrowsExpandIconThin />,
            title: "2D games made seamless.",
            content:
                "NovelRT is built from the ground up to create 2D games. The tooling is designed to support any kind of 2D game you can imagine! From puzzlers, metroidvanias, platformers, RTS games or even just your average Tetris clone!",
        },
        {
            id: "no-boilerplate",
            icon: <BookOpenIconThin />,
            title: "Write narratives. Not boilerplate.",
            content:
                "Tired of writing tools and burning out before you can actually write your visual novel script? Do you want a tool that has it integrated as part of the platform? NovelRT is built to support your inner playwright from the get go!",
        },
    ];

    return (
        <main className="bg-gray-100 min-h-screen">
            <title>NovelRT</title>
            <Layout>
                <Hero
                    image={<NovelChan />}
                    title="Meet NovelRT."
                    description="NovelRT is a low-ceremony multi-platform open source game engine with a strong focus on 2D Game Development and first-class support for Novel Game Development."
                >
                    <FeaturesRow>
                        <Feature
                            featureIcon={<DesktopComputerIcon />}
                            featureName="Cross-Platform"
                            featureDescription="We make an active effort to bring NovelRT to as many platforms as we can, so you can focus on building your games. Right now we support Windows and Linux, with Web, MacOS, iOS and Android being actively developed!"
                        />
                        <Feature
                            featureIcon={<CodeIcon />}
                            featureName="Use what you love"
                            featureDescription="C#, Ink, Lua, MoonScript or C++? The core of NovelRT is written in C++ to give you the performance you need, but we provide in-depth bindings for powerful ecosystems like .NET. You can't find you favorite language? Just contribute language bindings yourself!"
                        />
                        <Feature
                            featureIcon={<CubeTransparentIcon />}
                            featureName="Built for modularity"
                            featureDescription="NovelRT features a well-crafted multi-threaded Entity Component System and promotes Data Oriented Design so that your codebase scales with your project. Batched rendering and high code reusability are a core focus for us."
                        />
                    </FeaturesRow>
                </Hero>

                <DetailedFeatures features={detailedFeatures} />
            </Layout>
        </main>
    );
};

export default IndexPage;
