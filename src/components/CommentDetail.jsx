import React from 'react';
import * as propTypes from 'prop-types';

const CommentDetail = props => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={props.avatar} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.content}</div>
    </div>
  </div>
);

CommentDetail.propTypes = {
  avatar: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  timeAgo: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default CommentDetail;
