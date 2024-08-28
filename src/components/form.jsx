import { useState } from "react";
import inputs from "./assets/inputs.json";
import data from "./assets/data.json";

const Form = () => {
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const validate = (input) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let error = {};
    for (let i in input) {
      if (!input[i]) {
        error[i] = "Empty";
      } else if (i === "email" && !regex.test(input[i])) {
        error[i] = "Invalid";
      }
    }
    return error;
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const validationError = validate(input);
    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setError({});
    }
  };

  return (
    <>
      <form
        onSubmit={submit}
        noValidate
        className="flex flex-col gap-4 rounded-xl bg-white p-4"
      >
        {inputs.map((i, index) => (
          <div className="flex h-14 flex-col gap-1" key={index}>
            <input
              className={`${error[i.name] ? "bg-error bg-customPosition bg-no-repeat text-red outline outline-2 outline-red" : "text-darkBlue outline outline-1 outline-grayishBlue"} w-full rounded-md p-2`}
              onChange={change}
              value={input[i.name]}
              placeholder={i.placeholder}
              type={i.type}
              name={i.name}
            />
            {error[i.name] && (
              <em className="text-right text-red">{error[i.name]}</em>
            )}
          </div>
        ))}
        <button
          className="transform rounded-lg bg-green p-2 duration-300 ease-in-out hover:opacity-60"
          type="submit"
        >
          {data.button}
        </button>
        <p className="text-center text-grayishBlue">
          {data.terms} <span className="text-red">{data.termsSpan}</span>
        </p>
      </form>
    </>
  );
};

export default Form;
