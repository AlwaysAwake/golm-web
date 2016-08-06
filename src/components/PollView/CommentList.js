import React, { PropTypes } from 'react';

import { CommentItem } from '../../components';


const CommentList = (props) => {
  return (
    <div className="comment-list">
    { props.pollHistories.map((history, idx) => {
      return <CommentItem key={idx} {...props} />;
    }) }
    </div>
  );
};

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
