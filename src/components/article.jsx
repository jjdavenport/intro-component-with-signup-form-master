import data from "./assets/data.json";

const Article = () => {
  return (
    <>
      <article className="flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold">{data.h1}</h1>
        <p>{data.p}</p>
      </article>
    </>
  );
};

export default Article;
