import data from "./assets/data.json";

const Button = () => {
  return (
    <>
      <a
        href="#"
        className="inline-block space-x-1 rounded-lg bg-blue p-4 text-center shadow-sm"
      >
        <p className="mx-auto w-52 font-semibold md:w-full">
          {data.buttonP} <span className="font-normal">{data.span}</span>
        </p>
      </a>
    </>
  );
};

export default Button;
