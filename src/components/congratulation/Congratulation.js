import React from "react";
import PropTypes  from 'prop-types'

const Congratulation = (props) => {
  return (
    <div data-test='component-congrats' className='ui hidden divider'>
      {props.success && <h2 data-test='congrats-msg' className='ui positive message'><i class="close icon"></i>Congratulations, you got it.</h2> }
    </div>
  );
};

Congratulation.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congratulation;
