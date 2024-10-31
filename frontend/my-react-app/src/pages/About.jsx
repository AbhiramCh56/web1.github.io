// src/pages/About.jsx

import "./About.css";
import Card from "./Cards";
import CardsContainer from "./CardContainer";

const About = () => {
  return (
    <div className="about-page">
      {/* <div className="background-image"></div> */}
      <div className="about-content">
        <h1>About Us</h1>
        <div className="inner-con">
          {/* <p>
          MNZ Media is a digital marketing agency dedicated to helping brands
          and influencers grow through tailored strategies. We focus on targeted
          advertising, personalized content creation, and strategic influencer
          partnerships to boost visibility and engagement. Our expertise in
          brand identity development, digital presence management, and
          performance optimization ensures that clients achieve sustained
          growth. By leveraging data-driven insights and fostering meaningful
          collaborations, MNZ Media helps businesses and influencers expand
          their reach, connect with their audiences, and maximize their impact
          across digital platforms.
        </p> */}
          <CardsContainer />
        </div>
      </div>
    </div>
  );
};

export default About;
