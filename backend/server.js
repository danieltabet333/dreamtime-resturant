import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// serve static images
app.use(express.static("images"));

// multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dreamtime",
});

// --------- API ROUTES ---------

// GET all menu items
app.get("/menu", (req, res) => {
  const q = "SELECT * FROM menu";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    for (const d of data) {
      if (d.image) {
        d.image = fs.readFileSync(`./images/${d.image}`).toString("base64");
      }
    }
    return res.json(data);
  });
});

// GET single menu item
app.get("/menu/:id", (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM menu WHERE id = ?";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    if (data[0]?.image) {
      data[0].image = fs.readFileSync(`./images/${data[0].image}`).toString(
        "base64"
      );
    }
    return res.json(data[0]);
  });
});

// ADD new menu item
app.post("/menu", upload.single("image"), (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : null;
  const q =
    "INSERT INTO menu(`name`,`description`,`price`,`image`) VALUES (?,?,?,?)";
  db.query(q, [name, description, price, image], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE menu item
app.delete("/menu/:id", (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM menu WHERE id = ?";
  db.query(q, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// UPDATE menu item
app.post("/menu/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : null;

  let q, params;
  if (image) {
    q = "UPDATE menu SET `name`=?, `description`=?, `price`=?, `image`=? WHERE id=?";
    params = [name, description, price, image, id];
  } else {
    q = "UPDATE menu SET `name`=?, `description`=?, `price`=? WHERE id=?";
    params = [name, description, price, id];
  }

  db.query(q, params, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// --------- START SERVER ---------
app.listen(5000, () => {
  console.log("Backend connected on port 5000");
});
