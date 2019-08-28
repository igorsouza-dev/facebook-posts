import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
    renderPosts = () => {
        const posts = this.props.posts.map((post, index) => {
            return <PostItem key={index} texto={post.texto} />
        })
        return posts;
    }
    render() {
        return (
            <div className="post-list">
                {this.renderPosts()}
            </div>
        );
    }
}

export default PostList;