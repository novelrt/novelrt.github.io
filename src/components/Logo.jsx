import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Logo() {
    return (
        <StaticImage
            src="../images/novel-chan.png"
            className="w-64"
            loading="eager"
            placeholder="none"
            fadeIn={false}
            durationFadeIn={0}
            alt="Novel-Chan: NovelRT's mascot!"
        />
    );
}

export default Logo;
