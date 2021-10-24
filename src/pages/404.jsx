import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import NovelChan from "../components/NovelChan";

const IndexPage = () => (
    <main className="bg-gray-100 min-h-screen">
        <title>Page Not Found | NovelRT</title>
        <Layout>
            <Hero
                image={<NovelChan />}
                title="Page Not Found."
                description="Oops! The page you are looking for does not exist."
            />
        </Layout>
    </main>
);

export default IndexPage;
