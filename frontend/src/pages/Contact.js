import { useState } from "react";
import "../styles/Contact.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function send() {
    if (!name || !email || !msg) return alert("Fill all fields");
    setName(""); setEmail(""); setMsg("");
    alert("Message sent!");
  }

  return (
    <div className="pagebox">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        We’d love to hear from you! Whether you have questions, feedback, or just want to say hi, fill out the form below or see our location on the map.
      </p>

      <div className="contact-row">

        <div className="contact-form">
          <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required className="inputbox"/>
          <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required className="inputbox"/>
          <textarea placeholder="Message" value={msg} onChange={e => setMsg(e.target.value)} required className="inputbox"/>
          <button onClick={send} className="contact-btn">Send</button>

          <div className="contact-info">
            <h3>Reach Us At</h3>
            <p><FaEnvelope /> <a href="mailto:contact@dreamtime.com">contact@dreamtime.com</a></p>
            <p><FaPhone /> <a href="tel:+1234567890">+1 234 567 890</a></p>
            <p>Follow us:</p>
            <div className="social-links">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

  
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
