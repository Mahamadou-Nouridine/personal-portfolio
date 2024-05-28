import React from "react";

export const metadata = {
  title: "Nouridine | Blog",
};

const blog = () => {
  return (
    <>
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title" style={{ color: "white" }}>
            Blog
          </h2>
        </header>

        <p className="text-white text-xl-center">Coming soon!</p>
      </article>
    </>
  );
};

export default blog;
