import React from "react";
import "./Create.css";
import Header from "../Header/Header";
import CreateForm from "../../Hooks/CreateForm";

const Create = () => {
  const [formValues, HandleInput] = CreateForm({
    name: "",
    category: "",
    price: "",
    image: null,
  });
  const { name, category, price, image } = formValues;

  const hadleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <>
      
      <div className="centerDiv">
        <form onSubmit={hadleSubmit}>
          <label htmlFor="name" className="label">
            Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            placeholder="Name"
            value={name}
            onChange={HandleInput}
          />
          <br />

          <br />
          <label htmlFor="category" className="label">
            Category
          </label>
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            placeholder="Category"
            value={category}
            onChange={HandleInput}
          />
          <br />

          <br />
          <label htmlFor="price" className="label">
            Price
          </label>
          <input
            className="input"
            type="number"
            id="fname"
            name="price"
            placeholder="Price"
            value={price}
            onChange={HandleInput}
          />
          <br />
          <br />
          {image && (
            <img
              alt="Posts"
              width="100px"
              height="100px"
              className="img"
              src={URL.createObjectURL(image)}
            ></img>
          )}

          <br />
          <input
            type="file"
            className="input"
            name="image"
            onChange={HandleInput}
          />
          <br />
          <button className="uploadBtn">upload and Submit</button>
        </form>
      </div>
    </>
  );
};

export default Create;
