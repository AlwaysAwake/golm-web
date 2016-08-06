import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';

import { PollItem, CommentList, Spinner } from '../../components';


class PollView extends Component {
  componentWillMount() {
    const { params, dispatch } = this.props;

    dispatch(Actions.fetchPoll(params.id));
  }

  onClickPoll(answer) {
    const { user, dispatch, params } = this.props;

    const commentRef = this.refs.comment.value;
    dispatch(Actions.doPoll({
      answer,
      poll_id: params.id,
      comment: commentRef,
    }));
  }

  render() {
    const { poll, isFetching } = this.props;

    return (
      <div className="container" style={{ padding: '15px' }}>
      {
        isFetching
        ? <Spinner />
        : <div>
          <h2 className="display-3">{poll.title}</h2>
          <div className="divider"></div>
          <h3 className="lead">{poll.description}</h3>
          <div className="row" style={{ marginTop: '20px' }}>
            { ['A', 'B'].map((choice, idx) => {
              const pollItem = {
                img: poll['img_' + choice],
                answer: poll['answer_' + choice],
                description: poll['description_' + choice],
              };
              return <PollItem {...pollItem} key={idx} choice={choice} />;
            }) }
          </div>
          <div className="row" style={{ padding: '0 30px' }}>
            <div className="col-sm-12">
              <input className="comment-input text-center" type="text" ref="comment" style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }} placeholder="Please show your opinion." />
            </div>
            <div className="col-sm-6">
              <img onClick={() => this.onClickPoll('A')} className="vote-img fit-to-width" src="
https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/so_vote_a.png" role="presentation" style={{ float: 'right' }} />
            </div>
            <div className="col-sm-6">
              <img onClick={() => this.onClickPoll('B')} className="vote-img fit-to-width" src="
https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/so_vote_b.png" role="presentation" />
            </div>
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
  const { polls, users } = state;
  return {
    poll: polls.poll,
    user: users.user,
    isFetching: state.common.isFetching,
  };
};

export default connect(mapStateToProps)(PollView);
