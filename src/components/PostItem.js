import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return (
            <div className="post">{this.props.texto}</div>
        );
    }
}

export default PostItem;