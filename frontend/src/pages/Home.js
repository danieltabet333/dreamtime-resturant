import "../styles/Home.css";
import pic1 from "../pictures/pic8.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pagebox">
      <h1>Welcome to DreamTime</h1>
      <p>Your favorite meals, delivered fresh and fast.</p>

      <img src={pic1} alt="Delicious Meal" className="home-pic" />

      <p className="home-text">
        At DreamTime, we make food ordering simple, fast, and enjoyable. 
        Whether you're craving something warm, healthy, spicy, or sweet, 
        our menu offers a variety of freshly prepared dishes made with 
        high-quality ingredients.
      </p>

      <p className="home-text">
        With just a few clicks, you can explore our menu, choose your favorite 
        items, add them to your cart, and have them delivered straight to your 
        doorstep. Convenience and taste — all in one place.
      </p>

      {/* NEW SECTION: What we offer */}
      <h2 className="section-title">Why Choose DreamTime?</h2>
      <ul className="home-list">
        <li>✔ Fast and reliable delivery</li>
        <li>✔ Fresh and high-quality ingredients</li>
        <li>✔ Certified food safety and hygiene standards</li>
        <li>✔ Friendly customer service</li>
        <li>✔ Easy online ordering system</li>
      </ul>

      {/* NEW SECTION: Promise */}
      <h2 className="section-title">Our Promise</h2>
      <p className="home-text">
        We believe that great food brings people together. That’s why we are 
        committed to delivering meals that not only taste amazing but are 
        also prepared with care, professionalism, and love.
      </p>

      {/* CTA */}
      <h2 className="section-title">Ready to Eat?</h2>
      <p className="home-text">
        Browse our menu, pick your favorite dishes, and enjoy a smooth ordering 
        experience with DreamTime today!
      </p>

      {/* ✅ Button added after Ready to Eat */}
      <div className="menu-btn-container">
        <Link to="/menu" className="menu-btn">
          View Menu
        </Link>
      </div>
    </div>
  );
}
