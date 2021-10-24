import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const NovelChan = () => (
    <StaticQuery
        query={graphql`
            {
                novelchan: file(relativePath: { regex: "/novel-chan/" }) {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
            }
        `}
        render={(data) => (
            <GatsbyImage
                image={data.novelchan.childImageSharp.gatsbyImageData}
                className="w-64"
                alt="Novel-Chan: NovelRT's mascot!"
            />
        )}
    />
);

export default NovelChan;
