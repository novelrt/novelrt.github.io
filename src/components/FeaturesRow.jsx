import * as React from "react";

const FeatureRow = ({ children }) => (
    <div
        id="features"
        className="grid grif-cols-1 gap-12 xl:grid lg:grid-cols-4 lg:gap-x-4 px-4 mt-20 m-auto"

    >
        {children}
    </div>
);

export default FeatureRow;
