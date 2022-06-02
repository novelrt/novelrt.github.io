import React from "react"

const DetailedContributors = ({ contributors }) => (
    <ul className="w-full m-auto p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-gray-800 max-w-5xl">
        {contributors.map((contributor) => (
            <li id={contributor.id}
                key={contributor.id} className="rounded overflow-hidden shadow-lg flex flex-col text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
                <button
                    onClick={() => {
                        window.open(contributor.html_url, "_blank", "noopener noreferrer")
                    }}
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            window.open(
                                contributor.html_url,
                                "_blank",
                                "noopener noreferrer"
                            )
                        }
                    }}
                    tabIndex="0"
                    type="button"
                    className="transform transition duration-500
                    focus:bg-blue-50"
                >
                <img className="w-full rounded-full block p-4" src={contributor.avatar_url} alt={contributor.login} />
                    <div className="px-2 py-4 flex-1">
                        <h2 className="font-bold mb-2 text-base">{contributor.login} <span className="text-gray-500 text-base ">({contributor.contributions})</span></h2>

                    </div>
                </button>
            </li>
        ))
        }
    </ul>

);

export default DetailedContributors;