import React from "react";
import Card from "./Cards";
import "./CardComponent.css";

const cardData = [
  {
    title: "Our Services",
    content: [
      "Create ads that reach the right people",
      "Develop custom content that resonates",
      "Partner with influencers to boost your brand",
    ],
    titleLevel: "h2",
  },
  {
    title: "What We are Good At",
    content: [
      "Building strong brand identities",
      "Managing your online presence",
      "Optimizing performance for the best results",
    ],
    titleLevel: "h2",
  },
  {
    title: "Our Approach",
    content: [
      "Use data to make smart decisions",
      "Build meaningful partnerships",
    ],
    titleLevel: "h2",
  },
  {
    title: "How You Benefit",
    content: [
      "Get noticed and engage more with your audience",
      "Enjoy steady growth",
      "Connect better with your audience",
    ],
    titleLevel: "h2",
  },
];

const CardsContainer = () => (
  <div className="cards-container">
    {cardData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        content={card.content}
        titleLevel={card.titleLevel}
      />
    ))}
  </div>
);

export default CardsContainer;
