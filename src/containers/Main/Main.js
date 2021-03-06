import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';

import { Swiper, CardContainer, Spinner } from '../../components';


class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTab: 'normal',
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(Actions.fetchPolls());
  }

  onClickCard(id) {
    this.context.router.push(`/polls/${id}`);
  }

  onClickTab(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { polls, isFetching } = this.props;
    const { selectedTab } = this.state;
    const filteredPolls = polls.filter(poll => poll.type === selectedTab);

    return (
      <div className="container" style={{ padding: '15px' }}>
      {
        isFetching
        ? <Spinner />
        : <div>
          <Swiper />
          <CardContainer
            polls={filteredPolls}
            onClickCard={(id) => this.onClickCard(id)}
            onClickTab={(tab) => this.onClickTab(tab)}
          />
        </div>
      }
      </div>
    );
  }
}

Main.contextTypes = {
  router: PropTypes.object.isRequired,
};

Main.propTypes = {
  polls: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { polls } = state;
  return {
    polls: polls.polls,
    isFetching: state.common.isFetching,
  };
};

export default connect(mapStateToProps)(Main);
