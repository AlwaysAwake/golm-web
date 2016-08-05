import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';


class PollView extends Component {
  componentWillMount() {

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
    poll: {},
  })
)(PollView);

export default connect(mapStateToProps)(PollView);
