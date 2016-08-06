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
    if (user) {
      dispatch(Actions.doPoll({
        answer,
        poll_id: params.id,
        comment: commentRef,
      }));
    }
  }

  render() {
    const { poll, isFetching } = this.props;
    let percentA, percentB;
    if (poll.count_A === 0 && poll.count_B === 0) {
      percentA = 50;
      percentB = 50;
    } else {
      percentA = poll.count_A / (poll.count_A + poll.count_B) * 100;
      percentB = poll.count_B / (poll.count_A + poll.count_B) * 100;
    }

    return (
      <div className={`container ${poll.type}`} style={{ padding: '15px' }}>
      {
        isFetching
        ? <Spinner />
        : <div>
          <h2 className="display-4" style={{ fontWeight: 500 }}>{poll.title}</h2>
          <div className="divider"></div>
          <h3 className="lead">{poll.description}</h3>
          <div className="row" style={{ marginTop: '20px' }}>
            { ['A', 'B'].map((choice, idx) => {
              const pollItem = {
                img: poll['img_' + choice],
                answer: poll['answer_' + choice],
                description: poll['description_' + choice],
                type: poll.type,
              };
              return <PollItem {...pollItem} key={idx} choice={choice} />;
            }) }
          </div>
          <div className="row" style={{ padding: '0 30px' }}>
            <div className="col-sm-12">
              <input className="comment-input text-center" type="text" ref="comment" style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }} placeholder="선택하실 내용에 대한 의견을 작성해 주신 후 투표해 주세요." />
            </div>
            <div className="col-sm-6">
              <img onClick={() => this.onClickPoll('A')} className="vote-img fit-to-width" src={`
https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/${poll.type === 'premium' ? 'cm' : 'so'}_vote_a.png`} role="presentation" style={{ float: 'right' }} />
            </div>
            <div className="col-sm-6">
              <img onClick={() => this.onClickPoll('B')} className="vote-img fit-to-width" src={`
https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/${poll.type === 'premium' ? 'cm' : 'so'}_vote_b.png`} role="presentation" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="percentage-left">
                A&nbsp;&nbsp;&nbsp;{percentA}%
              </div>
              <div className="percentage-right">
                {percentB}%&nbsp;&nbsp;&nbsp;B
              </div>
            </div>
            <div className="col-sm-12">
              <img src={`https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/point_${poll.type === 'premium' ? 'co' : 'so'}.png`} className="percentage-pointer-img" role="presentation" style={{ marginLeft: `calc(${percentA}% - 15px)` }} />
            </div>
            <div className="col-sm-12">
              <div className="percentage-bar"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <CommentList pollHistories={poll.poll_histories} />
            </div>
          </div>
        </div>
      }
      </div>
    );
  }
}

PollView.propTypes = {
  poll: PropTypes.object.isRequired,
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
