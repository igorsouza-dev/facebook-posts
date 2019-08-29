import React, { Component } from "react";

class PostItem extends Component {
  post = this.props.post;

  renderComments() {
    return this.post.comments.map(comment => {
      return (
        <div className="post-comment-section">
          <div className="comment-author">
            <div className="comment-author-avatar">
              <img src={comment.author.avatar} />
            </div>
          </div>
          <div className="post-comment">
            <span className="comment-author-name">
              {comment.author.name}
            </span>
            <span>
              {comment.content}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="post">
        <div className="post-author-section">
          <div className="author-avatar">
            <img src={this.post.author.avatar} />
          </div>
          <div className="author-name-section">
            <div>
              <span className="author-name">
                {this.post.author.name}
              </span>
            </div>
            <div>
              <span className="date">
                {this.post.date}
              </span>
            </div>
          </div>
        </div>
        <div className="post-content-section">
          <span>
            {this.post.content}
          </span>
        </div>
        <div className="post-comments">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default PostItem;
