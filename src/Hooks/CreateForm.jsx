import React, { useState } from "react";

const CreateForm = (initalValue) => {
  const [values, setValues] = useState(initalValue);
  const handleChange = (event) => {
    const { name, type, files, value } = event.target;

    setValues((prevVal) => ({
      ...prevVal,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  return [values, handleChange];
};

export default CreateForm;
