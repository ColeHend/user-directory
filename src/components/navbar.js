import React from "react";
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
      <button onClick={setPrev}>{"< Previous"}</button>
      <button>Edit</button>
      <button>Delete</button>
      <button>New</button>
      <button onClick={setNext}>{"Next >"}</button>
    </div>
  );
}
