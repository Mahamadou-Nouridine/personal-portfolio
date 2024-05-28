import { Image } from "react-bootstrap";

const Notfound = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Not Found</h2>
      </header>
      <Image className="w-100" src="/assets/images/404.png" alt="not foud" />
    </article>
  );
};

export default Notfound;
