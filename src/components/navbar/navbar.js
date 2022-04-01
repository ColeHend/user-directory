import React from "react";
import "./navbar.css";
export default function NavBar(props) {
  const { viewPosition, setViewPosition, maxLength } = props;

  const changeViewBtnStyle = {
    border: "none",
    backgroundColor: "inherit",
    fontWeight: "500",
  };
  const otherBtnStyle = {
    border: "none",
    margin: "10px",
    backgroundColor: "blue",
  };

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
      <button
        style={{ ...changeViewBtnStyle, float: "left" }}
        onClick={setPrev}
      >
        {"< Previous"}
      </button>
      <button style={{ ...otherBtnStyle, marginLeft: "45%" }}>Edit</button>
      <button style={{ ...otherBtnStyle }}>Delete</button>
      <button style={{ ...otherBtnStyle }}>New</button>
      <button
        style={{ ...changeViewBtnStyle, float: "right" }}
        onClick={setNext}
      >
        {"Next >"}
      </button>
    </div>
  );
}
