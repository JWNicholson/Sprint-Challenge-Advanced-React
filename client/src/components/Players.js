import React from "react";

const Players = props => {
  return (
    <div className="playersDiv">
      {props.players.map(person => (
           
        <p>
            {/* key={person.id}  */}
          Search total - {person.searches} * {person.name} - {" "}
          {person.country}
        </p>
      ))}
    </div>
  );
};

export default Players;
