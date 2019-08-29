import React, { Component } from "react";

import Header from "./components/Header";
import appCss from "./App.css";
import PostList from "./components/PostList";

import avatarJulio from "./assets/julio.png";
import avatarDiego from "./assets/diego.png";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: avatarJulio
        },
        date: "2019-06-04",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatarDiego
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        <Header />
        <PostList posts={this.state.posts} />
      </>
    );
  }
}

export default App;
