import * as React from "react";

const FeatureRow = ({ children }) => {
    const classes = `mt-20 m-auto px-4 gap-8 grid grid-cols-1 place-items-center ${children.length === 3 ? " xl:grid-cols-3 " : " xl:grid-cols-4 "}`;

    return (
        <div
            id="features"
        className={classes}
        >
            {children}
        </div>
    )};

export default FeatureRow;
