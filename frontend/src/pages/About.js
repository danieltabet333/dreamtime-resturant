import "../styles/About.css";
import pic7 from "../pictures/pic7.webp"; 

export default function About() {
  return (
    <div className="pagebox about-page">
      <h2>About Us</h2>

      <p className="intro-text">
        DreamTime is your trusted destination for delicious meals, fast delivery,
        and a smooth ordering experience — all from the comfort of your home.
      </p>

      <img src={pic7} alt="Our Restaurant" className="about-pic" />

      <p className="about-text">
        Founded in 2025, DreamTime was built on one mission: delivering high-quality,
        freshly prepared meals with honesty, safety, and passion. We believe that food
        should not only taste good — it should also be safe, clean, and made with care.
      </p>

      <p className="about-text">
        Our restaurant is fully certified in food safety and hygiene standards. 
        Every member of our kitchen team is trained to follow professional procedures,
        including temperature control, fresh ingredient handling, allergen awareness,
        and daily sanitation routines. Your health and trust are our top priority.
      </p>

      <p className="about-text">
        At DreamTime, we use only fresh, carefully selected ingredients. From crisp 
        vegetables and premium meats to homemade sauces and authentic spices, everything 
        is prepared daily to maintain outstanding flavor and quality. We never compromise 
        on freshness.
      </p>

      <p className="about-text">
        Our chefs combine years of experience with modern cooking techniques to bring 
        you a menu filled with both classic favorites and unique signature dishes. 
        Whether you're craving something comforting, refreshing, spicy, or sweet — 
        DreamTime has something for everyone.
      </p>

      <p className="about-text">
        Cleanliness is at the heart of everything we do. Our kitchen follows strict 
        hygiene protocols, equipment sterilization, and routine inspections to ensure 
        a safe environment. Each order is packed securely and delivered with care, 
        maintaining freshness from our kitchen to your doorstep.
      </p>

      <p className="about-text">
        DreamTime continues to grow thanks to our amazing community of customers. 
        Your satisfaction inspires us to innovate, improve, and keep serving meals 
        that bring joy, comfort, and unforgettable taste.
      </p>

      <p className="about-text">
        Thank you for choosing DreamTime — where every order is made with passion, 
        precision, and a whole lot of love.
      </p>
    </div>
  );
}
