import React, { PropTypes } from 'react';

import { defaultImg } from '../../constants/assets';


const PollItem = (props) => {
  return (
    <div className="col-sm-6">
      <div onClick={() => props.onClick(props.choice)} className="poll-item">
        <img src={props.img || defaultImg} role="presentation" />
        <div className="poll-block">
          <h3>{props.answer}</h3>
          <h5>{props.description}</h5>
        </div>
      </div>
    </div>
  );
};

PollItem.propTypes = {
  img: PropTypes.string,
  answer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PollItem;
