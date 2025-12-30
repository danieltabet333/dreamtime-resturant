import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css"; 

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setMenuItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMenu();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      // Remove deleted item from state instead of reloading
      setMenuItems(menuItems.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pagebox">
      <h2>Menu</h2>

      <button className="add-item-btn" onClick={() => navigate("/addMenu")}>
        Add New Item
      </button>

      <div className="gridbox">
        {menuItems.map((item) => (
          <div className="itembox" key={item.id}>
            {item.image && (
              <img
                className="item-img"
                src={`data:image/png;base64,${item.image}`}
                alt={item.name}
              />
            )}
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price}</p>
              <div className="button-row">
                <button
                  className="update-btn"
                  onClick={() => navigate(`/updateMenu/${item.id}`)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
