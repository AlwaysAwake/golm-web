import React, { PropTypes, Component } from 'react';

import { CommentItem } from '../../components';


class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'all',
    };
  }

  onClickTab(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { pollHistories } = this.props;
    const { selectedTab } = this.state;

    let filteredHistories = pollHistories;
    if (selectedTab !== 'all') {
      filteredHistories = pollHistories.filter(history => history.answer === selectedTab);
    }

    const tabList = {
      all: '전체 댓글 보기',
      A: 'A 지지 댓글 보기',
      B: 'B 지지 댓글 보기',
    };

    return (
      <div className="comment-list-container">
        <div className="comment-list-tab-wrapper">
        { Object.keys(tabList).map((tab, idx) => {
          return (
            <div onClick={() => this.onClickTab(tab)} key={idx} className={`comment-list-tab no-select ${selectedTab === tab ? 'active' : ''}`}>
              {tabList[tab]}
            </div>
          );
        }) }
        </div>
        <div className="comment-list-wrapper">
        {
          filteredHistories.length > 0
          ? filteredHistories.map((history, idx) => {
            return <CommentItem key={idx} {...history} />;
          })
          : <h3 className="text-center" style={{ marginTop: '30px' }}>작성된 댓글이 없습니다. 첫 댓글을 남겨보는 건 어떠세요?</h3>
        }
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  pollHistories: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.object.isRequired,
    comment: PropTypes.string.isRequired,
    poll_id: PropTypes.number.isRequired,
    answer: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  })),
};

export default CommentList;
