import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/menuForm.css";

const AddMenuItem = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [file, setFile] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", item.name);
    formdata.append("description", item.description);
    formdata.append("price", item.price);
    if (file) formdata.append("image", file);

    try {
      await axios.post("http://localhost:5000/menu", formdata);
      navigate("/menu");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="app">
      <div className="form">
        <h1>Add New Menu Item</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <input type="file" onChange={handleFile} />
        <button onClick={handleClick}>Add</button>
        {error && "Something went wrong!"}
        <Link to="/menu">See all Menu Items</Link>
      </div>
    </div>
  );
};

export default AddMenuItem;
