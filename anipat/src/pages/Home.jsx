import React, { useState } from "react";
import "./HomePage.css"; // import css
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";
import ServicesAndGallery from "./ServicesAndGallery";
import Intruduct from "./Intruduct";

export default function HomePage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && role) {
      setSubmitted(true);
    }
  };

  const renderMenu = () => {
    switch (role) {
      case "owner":
        return (
          <ul className="menu-list">
            <li>View My Pets</li>
            <li>Shop Pet Products</li>
            <li>Book Vet Appointment</li>
          </ul>
        );
      case "vet":
        return (
          <ul className="menu-list">
            <li>Appointment Schedule</li>
            <li>Patient Records</li>
            <li>Consultations</li>
          </ul>
        );
      case "shelter":
        return (
          <ul className="menu-list">
             <li><Link state={{placeholder: 'none'}} to={'/shelter'}>
              Available Pets
            </Link></li>
           <li>Adoption Requests</li>
            <li>Donation Management</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="home-section">
        <h2>Welcome to Anipat</h2>
        <p>
          At <strong>Anipat</strong>, we care for your pets like family. Whether
          you're a pet owner, a veterinarian, or a shelter, we provide the tools
          you need to keep tails wagging and paws happy.
        </p>
  
        {!submitted ? (
          <form onSubmit={handleSubmit} className="home-form">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
  
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select user type</option>
              <option value="owner">Pet Owner</option>
              <option value="vet">Veterinarian</option>
              <option value="shelter">Shelter</option>
            </select>
  
            <button type="submit">Continue</button>
          </form>
        ) : (
          <div className="menu-section">
            <h3>Hi {name}, here’s your menu:</h3>
            {renderMenu()}
          </div>
        )}
      </section>

      <ProductCart />
      
      <ServicesAndGallery/>
      
    </>
  );
}
