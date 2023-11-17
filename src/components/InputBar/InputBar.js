import React from "react";

function InputBar({ handleGuess, gameOver }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className={`guess-input-wrapper ${gameOver && "disabled"}`}
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length < 5) {
          alert("Guess must be 5 or more characters.");
          return;
        }
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          let newGuess = event.target.value;
          if (newGuess.length < 6) {
            setGuess(event.target.value.toUpperCase());
          }
        }}
      />
    </form>
  );
}

export default InputBar;
