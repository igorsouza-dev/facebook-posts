import React, { Component } from "react";

import Header from "./components/Header";
import appCss from "./App.css";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}

export default App;
