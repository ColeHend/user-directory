import React from "react";
import data from "../../data";
import "./index.css";
export default function InfoDisplay(props) {
  const { viewPosition, maxLength } = props;

  return (
    <div className="infoDisplay">
      <div className="info">
        <div>
          <span>
            {data[viewPosition].name.first + " " + data[viewPosition].name.last}
          </span>
          <span style={{ float: "right" }}>
            {viewPosition + 1}/{maxLength + 1}
          </span>
        </div>
        <div>
          <span>
            From: {data[viewPosition].city + ", " + data[viewPosition].country}
          </span>
        </div>
        <div>
          <span>Job Title: {data[viewPosition].title}</span>
        </div>
        <div>
          <span>Employer: {data[viewPosition].employer}</span>
        </div>
        <div>
          <span>
            Favorite Movies:
            <ul>
              {data[viewPosition].favoriteMovies.map((movie) => {
                return <li key={movie + data[viewPosition].name}>{movie}</li>;
              })}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
