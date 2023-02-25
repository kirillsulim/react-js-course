import { useRef, useState } from "react";

import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/ui/select/MySelect";

import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(
    [
      {id: 1, title: "B", body: "Zadexty"},
      {id: 2, title: "cDAS", body: "Abced"},
      {id: 3, title: "Efa", body: "TexFety"},
      {id: 4, title: "Gush", body: "Lapalap"},
      {id: 5, title: "Jsss", body: "Colpo"},
    ]
  );

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (event) => {
    let sort = event.target.value;
    console.log(sort);
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            {value: "title", name: "Sort by title"},
            {value: "body", name: "Sort by body"}
          ]}
        />
      </div>
      <PostList remove={removePost} posts={posts} title={"Pisek postov"}/>
    </div>
  );
}

export default App;
