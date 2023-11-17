import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  let classes = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={`cell ${classes ? classes[index].status : ""}`}
          key={index}
        >
          {guess ? guess.charAt(index) : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
