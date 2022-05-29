import React, { useState, useEffect } from "react"

const DetailedContributors = () => {
    // Client-side Runtime Data Fetching
    const [ghData, setGhData] = useState(0)
    useEffect(() => {
        // get data from GitHub api
        // https://novelrt-functions.azurewebsites.net/api/novelrtcontributors
        // https://api.github.com/repos/novelrt/NovelRT/contributors
        fetch(`https://novelrt-functions.azurewebsites.net/api/novelrtcontributors`)
            .then(response =>
                // console.log(response)
                response.json()
            ) // parse JSON from request
            .then(resultData => {
                setGhData(resultData)

            }) // set data for the number of stars
    }, [])



    if (ghData === 0) {
        return (
            <div className="grid grid-cols-1 gap-3">
                <h1 className="font-bold text-gray-800 text-center text-4xl mt-2 mb-2 ">Loading...</h1>
            </div>

        )
    }

    const contributors = [...ghData.data]
    contributors.sort((a, b) => (b.contributions > a.contributions) ? 1 : -1)

    return (
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
    )
};

export default DetailedContributors;