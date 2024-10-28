import React from "react";
// import "./Tooltip.css"; // Assuming you place the CSS in Tooltip.css

const Tooltip = ({ text, children }) => (
  <div className="tooltip">
    {children}
    {/* <span className="tooltiptext">{text}</span> */}
  </div>
);

export default Tooltip;
