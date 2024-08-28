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
      <form onSubmit={submit} noValidate className="flex flex-col">
        {inputs.map((i, index) => (
          <div key={index}>
            <input
              onChange={change}
              value={input[i.name]}
              placeholder={i.placeholder}
              type={i.type}
              name={i.name}
            />
            {error[i.name] && <p>{error[i.name]}</p>}
          </div>
        ))}
        <button type="submit">{data.button}</button>
      </form>
    </>
  );
};

export default Form;
