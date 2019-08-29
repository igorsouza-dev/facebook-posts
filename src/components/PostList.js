import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  renderPosts = () => {
    const posts = this.props.posts.map(post => {
      return <PostItem key={post.id} post={post} />;
    });
    return posts;
  };
  render() {
    return <div className="post-list">{this.renderPosts()}</div>;
  }
}

export default PostList;
