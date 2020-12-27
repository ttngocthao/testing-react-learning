import React from "react";
import PropTypes from "prop-types";
const WordInput = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <div data-test="component-input">
      <h2>Your guess is</h2>
      <form className="ui action input">
        <input
          data-test="input-box"
          type="text"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          className="ui violet button"
          data-test="submit-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

WordInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default WordInput;
