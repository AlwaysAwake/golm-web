import React, { PropTypes, Component } from 'react';
import { defaultImg180 } from '../../constants/assets';


const CardItem = (props) => {
  return (
    <div className="col-sm-4">
      <div onClick={() => props.onClick(props.poll.id)} className="card no-select">
        <img src={props.poll.img_A || defaultImg180} className="card-img-top" role="presentation" style={{ width: '50%', height: '180px' }} />
        <img src={props.poll.img_B || defaultImg180} className="card-img-top" role="presentation" style={{ width: '50%', height: '180px' }} />
        <div className="card-block">
          <h4 className="card-title">{props.poll.title}</h4>
          <p className="card-text">{props.poll.description}</p>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  poll: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardItem;
