import React, { Component } from "react";
import PostItem from "./PostItem";
import postsData from "./postsData";

class PostList extends Component {

  state = { ...postsData }

  renderPosts = () => {
    const posts = this.state.posts.map(post => {
      return <PostItem key={post.id} post={post} />;
    });
    return posts;
  };
  render() {
    return <div className="post-list">{this.renderPosts()}</div>;
  }
}

export default PostList;
