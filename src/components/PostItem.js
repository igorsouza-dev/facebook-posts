import React, { Component } from "react";

class PostItem extends Component {
  post = this.props.post;

  render() {
    return (
      <div className="post">
        <div className="post-author-section">
          <img src={this.post.avatar} />
        </div>
        {this.post.content}
      </div>
    );
  }
}

export default PostItem;
