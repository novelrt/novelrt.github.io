import * as React from "react";

const FeatureRow = ({ children }) => (
    <div
        id="features"
        className="flex flex-col gap-12 xl:grid xl:grid-cols-3 xl:gap-x-4 px-4 mt-20 m-auto"

    >
        {children}
    </div>
);

export default FeatureRow;
