import React, { PropTypes, Component } from 'react';


const CardItem = (props) => {
  return (
    <div onClick={() => props.onClick(props.poll.id)} className="card no-select">
      <div className="card-header">
        <img src={props.poll.img} role="presentation" />
      </div>
      <div className="card-body">
        <h2>{props.poll.title}</h2>
        <h4>{props.poll.desc}</h4>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardItem;
