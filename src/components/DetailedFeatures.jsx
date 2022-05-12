import * as React from "react";

const DetailedFeatures = ({ features }) => (
    <ul className="flex flex-col gap-16 xl:gap-20 items-center py-28 px-4  max-w-prose m-auto text-gray-800">
        {features.map((f, i) => {
            const innerClasses =
                i % 2 === 0
                    ? "xl:mx-12 justify-self-center"
                    : "xl:mx-12 justify-self-center xl:col-start-2 xl:col-end-3 xl:row-start-1";

            return (
                <li
                    id={f.id}
                    key={f.id}
                    className="grid grid-cols-1 xl:grid-cols-2 gap-1 place-items-center"
                >
                    <div className={innerClasses}>
                        <div className="bg-gradient-to-br text-gray-100 from-green-400 via-blue-500 to-pink-600 rounded-full py-3 px-3 xl:py-6 xl:px-6 w-16 h-16 xl:w-36 xl:h-36 shadow">
                            {f.icon}
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-2 xl:mt-0 font-semibold xl:font-normal text-center xl:text-left text-3xl xl:text-4xl">
                            {f.title}
                        </h3>
                        <p className="mt-2 max-w-prose xl:text-left">
                            {f.content}
                        </p>
                    </div>
                </li>
            );
        })}
    </ul>
);

export default DetailedFeatures;
