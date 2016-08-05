import React, { PropTypes, Component } from 'react';


class PollView extends Component {
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

export default PollView;
