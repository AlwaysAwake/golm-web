import React, { PropTypes } from 'react';


const CommentItem = (props) => {
  return (
    <div className="comment-item">

    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default CommentItem;
