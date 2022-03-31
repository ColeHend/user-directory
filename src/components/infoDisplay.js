import React from "react";
import data from "../data";
export default function InfoDisplay(props) {
  const { viewPosition } = props;
  return (
    <div className="infoDisplay">
      <div className="info">
        <div>
          <h1>
            {data[viewPosition].name.first + " " + data[viewPosition].name.last}
          </h1>
        </div>
        <div>
          <h2>
            From: {data[viewPosition].city + ", " + data[viewPosition].country}
          </h2>
        </div>
        <div>
          <h2>Job Title: {data[viewPosition].title}</h2>
        </div>
        <div>
          <h2>Employer: {data[viewPosition].employer}</h2>
        </div>
        <div>
          <h2>
            Favorite Movies:
            <ul>
              {data[viewPosition].favoriteMovies.map((movie) => {
                return <li key={movie + data[viewPosition].name}>{movie}</li>;
              })}
            </ul>
          </h2>
        </div>
      </div>
    </div>
  );
}
