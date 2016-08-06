import React, { PropTypes } from 'react';

import { defaultImg180 } from '../../constants/assets';


const PollItem = (props) => {
  return (
    <div className="col-sm-6">
      <div className="poll-item">
        <img src={props.img || defaultImg180} role="presentation" />
        <div className="poll-block row">
          <div className="col-xs-4">
            <img src={`https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/big_${props.choice.toLowerCase()}_${props.type === 'premium' ? 'c' : 'so'}.png`} className="fit-to-width" role="presentation" />
          </div>
          <div className="col-xs-8">
            <h3>{props.answer}</h3>
            <h6>{props.description}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

PollItem.propTypes = {
  img: PropTypes.string,
  answer: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
}

export default PollItem;
