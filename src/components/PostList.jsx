import React from "react";

import Post from "./Post";

const PostList = ({posts, remove, title, ...props}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map(post => <Post post={post} key={post.id} remove={remove}/>)}
        </div>
    )
}

export default PostList;
