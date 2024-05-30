import { useTranslations } from "next-intl";
import React from "react";

export const metadata = {
  title: "Nouridine | Blog",
};

const Page = () => {
  const t = useTranslations("blog-page")
  return (
    <>
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title" style={{ color: "white" }}>
            Blog
          </h2>
        </header>

        <p className="text-white text-xl-center">{t('soon')}</p>
      </article>
    </>
  );
};

export default Page;
