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
      all: 'All comments',
      A: 'Comments supporting A',
      B: 'Comments supporting B',
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
          { filteredHistories.map((history, idx) => {
            return <CommentItem key={idx} {...history} />;
          }) }
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
