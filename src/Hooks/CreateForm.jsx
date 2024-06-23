import React, { useState } from "react";

const CreateForm = (initalValue) => {
  const [values, setValues] = useState(initalValue);
  return [
    values,
    (event) => {
      const { name, type, files, value: inputValues } = event.target;
      setValues((prevVal) => ({
        ...prevVal,
        [name]: type === "file" ? files[0] : inputValues,
      }));
    },
  ];
};

export default CreateForm;
