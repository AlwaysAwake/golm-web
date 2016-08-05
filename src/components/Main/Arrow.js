import React, { PropTypes } from 'react';


const Arrow = (props) => {
  return (
    <div className="arrow">
      {props.text}
    </div>
  );
};

Arrow.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Arrow;
