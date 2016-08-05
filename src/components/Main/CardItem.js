import React, { PropTypes, Component } from 'react';


const CardItem = (props) => {
  return (
    <div className="col-sm-4">
      <div onClick={() => props.onClick(props.poll.id)} className="card no-select">
        <img src={props.poll.img} className="card-img-top" role="presentation" style={{ width: '100%', height: '180px' }} />
        <div className="card-block">
          <h4 className="card-title">{props.poll.title}</h4>
          <p className="card-text">{props.poll.desc}</p>
        </div>
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
