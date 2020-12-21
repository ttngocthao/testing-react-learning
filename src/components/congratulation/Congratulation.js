import React from "react";
import PropTypes  from 'prop-types'

const Congratulation = (props) => {
  return (
    <div data-test='component-congrats'>
      {props.success && <h2 data-test='congrats-msg'>Congratulations, you got it.</h2> }
    </div>
  );
};

Congratulation.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congratulation;
