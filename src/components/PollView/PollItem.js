import React, { PropTypes } from 'react';

import { defaultImg580 } from '../../constants/assets';


const PollItem = (props) => {
  return (
    <div className="col-sm-6">
      <div className="poll-item">
        <img src={props.img || defaultImg580} role="presentation" />
        <div className="poll-block row">
          <div className="col-xs-4">
            <img src={`https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/big_${props.choice.toLowerCase()}_so.png`} className="fit-to-width" role="presentation" />
          </div>
          <div className="col-xs-8">
            <h3>{props.answer}</h3>
            <h5>{props.description}</h5>
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
}

export default PollItem;
