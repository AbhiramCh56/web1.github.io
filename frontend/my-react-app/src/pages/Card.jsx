// src/components/Card.jsx

import React, { useState, useRef } from "react";
import "./Card.css"; // Ensure this file exists and contains the required styles

const Card = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null); // Create a reference for the card

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    // Use the ref to scroll to the bottom of the card or another desired element
    if (!isExpanded && cardRef.current) {
      const cardBottom =
        cardRef.current.getBoundingClientRect().bottom + window.scrollY; // Get the bottom position of the card
      window.scrollTo({ top: cardBottom, behavior: "smooth" }); // Scroll to the bottom of the card
    }
  };

  return (
    <div className="card" ref={cardRef}>
      {" "}
      {/* Attach the ref here */}
      <h3>{title}</h3>
      <p>{isExpanded ? content : `${content.substring(0, 100)}...`}</p>
      <button onClick={toggleExpand} className="button">
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Card;
