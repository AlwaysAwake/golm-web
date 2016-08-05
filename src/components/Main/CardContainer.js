import React, { Component, PropTypes } from 'react';

import { CardContainerTab, CardItem } from '../../components';


class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'normal',
    };
  }

  onClickTab(tab) {
    this.setState({ selectedTab: tab });
    this.props.onClickTab(tab);
  }

  render() {
    const { polls, onClickCard, onClickTab } = this.props;
    const { selectedTab } = this.state;

    return (
      <div className="card-container">
        <h2 className="text-center">Ongoing polls</h2>
        <CardContainerTab onClick={(tab) => this.onClickTab(tab)} selectedTab={selectedTab} />
        <div className="row">
          { polls[selectedTab].map((poll, idx) => <CardItem key={idx} onClick={onClickCard} poll={poll} />) }
        </div>
      </div>
    );
  }
}

CardContainer.propTypes = {
  polls: PropTypes.shape({
    normal: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })).isRequired,
    premium: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onClickCard: PropTypes.func.isRequired,
  onClickTab: PropTypes.func.isRequired,
};

export default CardContainer;
