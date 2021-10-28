import * as React from "react";

const FeatureRow = ({ children }) => (
    <div
        id="features"
        className="flex flex-col gap-12 xl:grid xl:grid-cols-3 xl:gap-x-20 mt-20 mx-20 md:mx-28 xl:mx-36"
    >
        {children}
    </div>
);

export default FeatureRow;
