import data from "./assets/data.json";

const Article = () => {
  return (
    <>
      <article className="flex flex-col gap-4 text-center md:justify-center md:text-left">
        <h1 className="text-3xl font-bold md:text-5xl">{data.h1}</h1>
        <p>{data.p}</p>
      </article>
    </>
  );
};

export default Article;
