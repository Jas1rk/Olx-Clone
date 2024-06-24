import React, { useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import CreateForm from "../../Hooks/CreateForm";
import fireBaseContext from "../../Storage/FirebaseContext";
import { userContext } from "../../Storage/userContext";
import { useNavigate } from "react-router-dom";
import {getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Create = () => {
  const [formValues, HandleInput] = CreateForm({
    name: "",
    category: "",
    price: "",
    image: null,
  });
  const { name, category, price, image } = formValues;
  const { firebaseapp } = useContext(fireBaseContext);
  const { user } = useContext(userContext);
  const navigate = useNavigate();


 
  const hadleSubmitAndUpload = async() => {
    if (name.length === 0 || category.length === 0 || price <= 0 || !image) {
      alert("plaease fill fields");
    } else {
      const storage = getStorage(firebaseapp);
      const reference_Storage = ref(storage, `/image/${image.name}`);
      const snapshot = await uploadBytes(reference_Storage,image)
      console.log("Product uploaded",snapshot)
      const url = await getDownloadURL(snapshot.ref)
      console.log("This is url",url)
      const dataBase = getFirestore(firebaseapp)
      console.log('This is database',dataBase)
      const collectionRef = collection(dataBase,"products")
      console.log('Collection ',collectionRef)
      const date = new Date().toLocaleDateString();
      console.log('date',date)
      const productData = {
        userId:user.uid,
        name:name,
        category:category,
        price:price,
        imageURL:url,
        createAt: date.toString()
      }
      console.log('product data',productData)
      await addDoc(collectionRef,productData)
      alert('product saved',productData)
    }
  };

  return (
    <>
      <div className="centerDiv">
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
        <button onClick={hadleSubmitAndUpload} className="uploadBtn">
          upload and Submit
        </button>
      </div>
    </>
  );
};

export default Create;




