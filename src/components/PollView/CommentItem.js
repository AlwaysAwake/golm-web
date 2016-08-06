import React, { PropTypes } from 'react';


const CommentItem = (props) => {
  return (
    <div className="comment-item row">
      <div className="col-sm-2" style={{ borderRight: '2px solid #000' }}>
        {props.user.nickname}
      </div>
      <div className="col-sm-6">
        {props.comment}
      </div>
      <div className="col-sm-4 text-right">
        {props.created_at}
      </div>
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
