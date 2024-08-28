import data from "./assets/data.json";

const Article = () => {
  return (
    <>
      <article>
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
      </article>
    </>
  );
};

export default Article;
