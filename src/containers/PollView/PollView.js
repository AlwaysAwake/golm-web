import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';

import { PollItem, CommentList, Spinner } from '../../components';


class PollView extends Component {
  componentWillMount() {
    const { params, dispatch } = this.props;

    dispatch(Actions.doFetch());
    dispatch(Actions.fetchPoll(params.id));
  }

  onClickPoll(choice) {
    this.props.dispatch(Actions.doPoll(choice));
  }

  render() {
    const { poll, isFetching } = this.props;

    return (
      <div className="container" style={{ padding: '15px' }}>
      {
        isFetching
        ? <Spinner />
        : <div>
          <div className="jumbotron">
            <h1 className="display-3">{poll.title}</h1>
            <p className="lead">{poll.description}</p>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <progress className="progress progress-info" value="50" max="100"></progress>
            </div>
            { ['A', 'B'].map((choice, idx) => {
              const pollItem = {
                img: poll['img_' + choice],
                answer: poll['answer_' + choice],
                description: poll['description_' + choice],
              };
              return <PollItem {...pollItem} key={idx} choice={choice} onClick={(c) => this.onClickPoll(c)} {...pollItem} />;
            }) }
            <CommentList pollHistories={poll.poll_histories} />
          </div>
        </div>
      }
      </div>
    );
  }
}

PollView.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    answer_A: PropTypes.string.isRequired,
    answer_B: PropTypes.string.isRequired,
    img_A: PropTypes.string,
    img_B: PropTypes.string,
    description_A: PropTypes.string,
    description_B: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { polls } = state;
  return {
    poll: polls.poll,
    isFetching: state.common.isFetching,
  };
};

export default connect(mapStateToProps)(PollView);
