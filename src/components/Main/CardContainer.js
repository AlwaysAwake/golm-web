import React, { Component, PropTypes } from 'react';

import { CardContainerTab, CardItem } from '../../components';


class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: '',
    };
  }
  render() {
    const { polls, onClickCard, onClickTab } = this.props;

    return (
      <div className="card-container">
        <CardContainerTab onClick={onClickTab} />
        { polls.map((poll, idx) => <CardItem key={idx} onClick={onClickCard} poll={poll} />) }
      </div>
    );
  }
}

CardContainer.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default CardContainer;
