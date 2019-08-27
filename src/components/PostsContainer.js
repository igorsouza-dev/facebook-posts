import React, { Component } from 'react';
import Post from './Post';
import postsContainerCss from './PostsContainer.css';

class PostsContainer extends Component {
    renderPosts = () => {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} texto={post.texto} />
        })
        return posts;
    }
    render() {
        return (
            <div className="posts-container">
                {this.renderPosts()}
            </div>
        );
    }
}

export default PostsContainer;