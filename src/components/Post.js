import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>{this.props.texto}</div>
        );
    }
}

export default Post;