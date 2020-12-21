import React from "react";

const Congratulation = (props) => {
  return (
    <div data-test='component-congrats'>
      {props.success && <h2 data-test='congrats-msg'>Congratulations, you got it.</h2> }
    </div>
  );
};

export default Congratulation;
