import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';

import { Swiper, CardContainer } from '../../components';
import fixtures from '../../fixtures/fixtures';


class Main extends Component {
  onClickCard(id) {
    this.context.router.push(`/polls/${id}`);
  }

  onClickTab(tab) {

  }

  render() {
    const { polls } = this.props;

    return (
      <div className="container" style={{ padding: '15px' }}>
        <Swiper />
        <CardContainer
          polls={polls}
          onClickCard={(id) => this.onClickCard(id)}
          onClickTab={(tab) => this.onClickTab(tab)}
        />
      </div>
    );
  }
}

Main.contextTypes = {
  router: PropTypes.object.isRequired,
};

Main.propTypes = {
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
};

const mapStateToProps = (state) => {
  return {
    polls: fixtures.polls,
  };
};

export default connect(mapStateToProps)(Main);
