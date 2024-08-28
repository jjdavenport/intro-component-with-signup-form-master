import data from "./assets/data.json";

const Button = () => {
  return (
    <>
      <a className="inline-block space-x-1 rounded-lg bg-blue p-2 text-center">
        <p>
          {data.buttonP} <span>{data.span}</span>
        </p>
      </a>
    </>
  );
};

export default Button;
