import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const NovelChan = () => (
    <StaticImage
        src="../images/novel-chan.png"
        className="w-64"
        loading="eager"
        placeholder="none"
        alt="Novel-Chan: NovelRT's mascot!"
    />
);

export default NovelChan;
