import React, { Component } from 'react';

import Navbar from './components/Navbar';
import appCss from './App.css';
import PostsContainer from './components/PostsContainer';

class App extends Component {
    posts = [
        { texto: 'Olá Mundo' },
        { texto: 'Olá Mundo 1' },
        { texto: 'Olá Mundo 2' },
        { texto: 'Olá Mundo 3' },
        { texto: 'Olá Mundo 4' },
    ];
    render() {
        return (
            <div >
                <Navbar />
                <PostsContainer posts={this.posts} />
            </div>
        );
    }
}

export default App;