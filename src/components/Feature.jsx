import * as React from "react";

const Feature = ({ children, featureName, featureDescription, linksTo }) => {
    const content = (
        <>
            <div className="flex items-center justify-center bg-gray-100 text-gray-800 rounded-full py-2 px-2 w-16 h-16 xl:w-14 xl:h-14 shadow-lg">
                {children}
            </div>
            <h3 className="mt-2 font-semibold text-center text-3xl xl:text-lg">
                {featureName}
            </h3>
            {featureDescription && (
                <p className="mt-2 text-center text-lg xl:text-sm">
                    {featureDescription}
                </p>
            )}
        </>
    );

    const wrapperClasses = "flex flex-col items-center";

    return linksTo ? (
        <a href={linksTo} className={wrapperClasses}>
            {content}
        </a>
    ) : (
        <div className={wrapperClasses}>{content}</div>
    );
};

export default Feature;
