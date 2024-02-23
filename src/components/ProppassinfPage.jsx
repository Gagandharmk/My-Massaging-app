import React from "react";

const ProppassinfPage = ({ heading, paraText, handleClick }) => (
  <>
    <div className="hello">
      <h1>{heading}</h1>
      <p>{paraText}</p>
    </div>
    <button onClick={handleClick}>Click Me</button>
  </>
);

export default ProppassinfPage;
