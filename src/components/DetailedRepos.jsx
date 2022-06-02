import React, { useState, useEffect } from "react"
import DetailedContributors from './DetailedContributors';

const DetailedRepos = () => {
  // Client-side Runtime Data Fetching
  const [ghData, setGhData] = useState(0)
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/novelrt/get-novelrt-contributors/main/data.json`)
      .then(response =>
        response.json()
      )
      .then(resultData => {
        setGhData(resultData)
      })
  }, [])

  if (ghData === 0) {
    return (
      <div className="grid grid-cols-1 gap-3">
        <h1 className="font-bold text-gray-800 text-center text-4xl mt-2 mb-2 ">Loading...</h1>
      </div>

    )
  }

  const repos = [...ghData.repos];

  return (
    <div className="grid grid-cols-1 gap-3 px-4 mx-auto text-gray-800">
      <ul className="text-gray-800 text-center mb-4">
        {repos.map(repo => (
          <li key={repo.repo_name} className="">
            <button className="w-full mx-auto text-gray-100 text-2xl bg-gray-700 my-8 py-4 rounded-3xl bg-gradient-to-b from-blue-500 to-indigo-600 transform transition duration-500 focus:outline-none focus:ring-4 focus:ring-green-400 hover:scale-y-110"
              onClick={() => {
                window.open(repo.repo_url, "_blank", "noopener noreferrer")
              }}
              onKeyDown={event => {
                if (event.key === "Enter") {
                  window.open(
                    repo.repo_url,
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              }}
              tabIndex="0"
              type="button"
            >
              <h2 className="tracking-wider">{repo.repo_name}
              </h2>
            </button>
            <DetailedContributors contributors={repo.contributors} />
          </li>

        ))}
      </ul>
    </div>
  );
};

export default DetailedRepos;