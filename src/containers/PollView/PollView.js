import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';


class PollView extends Component {
  componentWillMount() {
    const { params, dispatch } = this.props;

    dispatch(Actions.fetchPoll(params.id));
  }

  render() {
    return (
      <div className="poll-container">
      </div>
    );
  }
}

PollView.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  (state) => ({
    poll: state.poll,
  })
)(PollView);

export default connect(mapStateToProps)(PollView);
