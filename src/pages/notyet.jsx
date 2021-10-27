import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import NovelChan from "../components/NovelChan";

const NotYetPage = () => (
    <main className="bg-gray-100 min-h-screen">
        <title>Under Construction | NovelRT</title>
        <Layout>
            <Hero
                image={<NovelChan />}
                title="Under Construction."
                description="Thank you for your patience as we continue working on this page."
            />
        </Layout>
    </main>
);

export default NotYetPage;
