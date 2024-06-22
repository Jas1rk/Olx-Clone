import React from "react";
import "./Create.css";
import Header from "../Header/Header";
const Create = () => {
  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="name" className="label">
              Name
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              placeholder="Name"
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
              name="Price"
              placeholder="Price"
            />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src="" ></img>
          <form>
            <br />
            <input type="file" className="input" />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </>
  );
};

export default Create;
