import { useState } from "react";

import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";

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


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Body"/>
        <MyButton disabled="true">Post it</MyButton>
      </form>
      <PostList posts={posts} title={"Pisek postov"}/>
    </div>
  );
}

export default App;
