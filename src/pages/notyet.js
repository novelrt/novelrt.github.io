import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// styles
const pageStyles = {
  display: "flex",
  height: "90vh",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
};

const brandStyles = {
  fontSize: "4rem",
  fontWeight: "700",
};

const messageStyles = {
  fontSize: "1.8rem",
};

const linkStyles = {
  marginTop: "2rem",
  display: "inline-block",
  padding: ".8rem 4rem",
  textAlign: "center",
  background: "#374151",
  borderRadius: "5rem",
  fontSize: "1.4rem",
  filter: "drop-shadow(0 0 10px #374151)",
};

// markup
const NotYet = () => {
  return (
    <Layout>
      <main
        style={pageStyles}
        className="bg-gradient-to-b from-green-400 via-blue-500 to-indigo-600"
      >
        <title>NovelRT | Under Construction</title>
        <div>
          <h1 style={brandStyles}>Under Construction</h1>
          <p style={messageStyles}>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            We'll bring you new content as soon as it's ready!
          </p>
          <Link to="/" style={linkStyles}>
            Go Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default NotYet;
