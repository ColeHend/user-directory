import React from "react";
import "./navbar.css";
export default function NavBar(props) {
  const { viewPosition, setViewPosition, maxLength } = props;

  let setNext = () => {
    if (viewPosition < maxLength) {
      console.log("setNext Ran");
      let leNum = viewPosition + 1;
      return setViewPosition(leNum);
    }
  };
  let setPrev = () => {
    if (viewPosition > 0) {
      return setViewPosition(viewPosition - 1);
    }
  };

  return (
    <div className="navbar">
      <button className="changeViewBtn previousBtn" onClick={setPrev}>
        {"< Previous"}
      </button>
      <button className="otherBtn editBtn">Edit</button>
      <button className="otherBtn deleteBtn">Delete</button>
      <button className="otherBtn newBtn">New</button>
      <button className="changeViewBtn nextBtn" onClick={setNext}>
        {"Next >"}
      </button>
    </div>
  );
}
