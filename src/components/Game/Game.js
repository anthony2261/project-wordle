import React from "react";

import { sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import InputBar from "../InputBar";
import GuessBoard from "../GuessBoard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  function handleGuess(guess) {
    let newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === answer || newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  }

  return (
    <>
      <GuessBoard guesses={guesses} answer={answer} />
      {gameOver &&
        (guesses[guesses.length - 1] === answer ? (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>3 guesses</strong>.
            </p>
          </div>
        ) : (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>LEARN</strong>.
            </p>
          </div>
        ))}
      <InputBar handleGuess={handleGuess} gameOver={gameOver} />
    </>
  );
}

export default Game;
