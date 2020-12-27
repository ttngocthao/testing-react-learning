import React from "react";
import PropTypes from "prop-types";
const WordInput = ({ secretWord }) => {
  return (
    <div data-test="component-input">
      <h2>Your guess is</h2>
    </div>
  );
};

WordInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default WordInput;
