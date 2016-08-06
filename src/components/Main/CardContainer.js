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
          { polls.map((poll, idx) => <CardItem key={idx} onClick={onClickCard} poll={poll} />) }
        </div>
      </div>
    );
  }
}

CardContainer.propTypes = {
  polls: PropTypes.array.isRequired,
  onClickCard: PropTypes.func.isRequired,
  onClickTab: PropTypes.func.isRequired,
};

export default CardContainer;
