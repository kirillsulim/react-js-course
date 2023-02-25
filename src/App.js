import { useRef, useState } from "react";

import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";

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

  const emptyPost = {
    title: "",
    body: ""
  };

  const [post, setPost] = useState(emptyPost);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    setPosts([...posts, newPost]);
    setPost(emptyPost);
  };


  return (
    <div className="App">
      <form>
        <MyInput 
          value={post.title} 
          type="text" 
          placeholder="Title"
          onChange={e => setPost({...post,  title: e.target.value})}
        />
        <MyInput 
          value={post.body} 
          type="text" 
          placeholder="Body"
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Post it</MyButton>
      </form>
      <PostList posts={posts} title={"Pisek postov"}/>
    </div>
  );
}

export default App;
