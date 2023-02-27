import { useMemo, useRef, useState } from "react";
import PostFilter from "./components/PostFilter";

import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/ui/input/MyInput";
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

  const [filter, setFilter] = useState({
    sort: "",
    query: ""
  });

  const sortedPosts = useMemo(
    () => {
      console.log("Sorted posts calculated");
      if (filter.sort) {
        return [...posts]
          .sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      } else {
        return posts;
      }
    },
    [filter.sort, posts]
  );

  const sortedAndFilteredPosts = useMemo(() => {
    console.log("Filtered posts calculated");
    return sortedPosts.filter(post => post.title.includes(filter.query))
  }, [filter.query, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndFilteredPosts} title={"Pisek postov"}/>
    </div>
  );
}

export default App;
