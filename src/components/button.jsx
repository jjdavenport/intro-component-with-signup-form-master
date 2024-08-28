import data from "./assets/data.json";

const Button = () => {
  return (
    <>
      <div>
        <p>
          <span>{data.span}</span>
          {data.buttonP}
        </p>
      </div>
    </>
  );
};

export default Button;
