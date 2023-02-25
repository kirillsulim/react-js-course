import { useRef, useState } from "react";

import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(
    [
      {id: 1, title: "Jsss", body: "Texty"},
      {id: 2, title: "Jsss", body: "Texty"},
      {id: 3, title: "Jsss", body: "Texty"},
      {id: 4, title: "Jsss", body: "Texty"},
      {id: 5, title: "Jsss", body: "Texty"},
    ]
  );

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title={"Pisek postov"}/>
    </div>
  );
}

export default App;
