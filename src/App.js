import React, { Component } from 'react';

import Header from './components/Header';
import appCss from './App.css';
import PostList from './components/PostList';

class App extends Component {
    posts = [
        {
            user: {
                name: 'Júlio Alcantara',
                avatar: '',
            },

        }

    ];
    render() {
        return (
            <>
                <Header />
                <PostList posts={this.posts} />
            </>
        );
    }
}

export default App;