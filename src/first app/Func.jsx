import React from "react";
import "./external.css";

function Functional() {
  return (
    <>
      <div className="fcompo">
        <h1>This is created using functional Component</h1>
        <p className="sec">This is done using external css</p>
        <p className="sec">This is done using inline CSS</p>
      </div>
    </>
  );
}

export default Functional;