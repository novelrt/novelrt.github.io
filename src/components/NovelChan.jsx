import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const NovelChan = () => (
    <StaticImage
        src="../images/novel-chan.png"
        className="w-64"
        loading="eager"
        placeholder="none"
        fadein={false}
        durationfadein={0}
        alt="Novel-Chan: NovelRT's mascot!"
    />
);

export default NovelChan;
