import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/menuForm.css";

const UpdateMenuItem = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [file, setFile] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/menu/${id}`);
        setItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItem();
  }, [id]);

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
      await axios.post(`http://localhost:5000/menu/${id}`, formdata);
      navigate("/menu");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="app">
      <div className="form">
        <h1>Update Menu Item</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={item.name || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={item.description || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={item.price || ""}
          onChange={handleChange}
        />
        <input type="file" onChange={handleFile} />
        <button onClick={handleClick}>Update</button>
        {error && "Something went wrong!"}
        <Link to="/menu">Back to Menu</Link>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
