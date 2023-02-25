import React from "react";

import Post from "./Post";

const PostList = ({posts, remove, title, ...props}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.length !== 0
              ? posts.map(post => <Post post={post} key={post.id} remove={remove}/>)
              : <h1>Posty yok!</h1>
            }
        </div>
    )
}

export default PostList;
