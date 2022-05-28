import * as React from "react";

const DetailedContributors = ({ contributors }) => (
    <ul className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 m-auto text-gray-800 max-w-5xl">
        {contributors.map((contributor) => (
            <li
                id={contributor.id}
                key={contributor.id}
                className="rounded overflow-hidden shadow-lg flex flex-col text-center"
                onClick={() => {
                    window.open(contributor.htmlUrl, "_blank", "noopener noreferrer")
                }}
                onKeyDown={event => {
                    if (event.key === "Enter") {
                        window.open(
                            contributor.htmlUrl,
                            "_blank",
                            "noopener noreferrer"
                        )
                    }
                }}
                tabIndex="0"
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                role="button"
            >
                <img className="w-full" src={contributor.avatarUrl} alt={contributor.login} />
                <div className="px-2 py-4 flex-1">
                    <h2 className="font-bold mb-2">{contributor.login} ({contributor.contributions})</h2>

                </div>
            </li>
        ))
        }
    </ul>
);

export default DetailedContributors;