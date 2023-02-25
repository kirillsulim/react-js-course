import React from "react";

import MyButton from "./ui/button/MyButton";

const Post = ({post, remove, ...props}) => {
    return (
        <div className="post">
        <div className="post__content">
          <p><strong>{post.id}. {post.title}</strong></p>
          <div>
            <p>{post.body}</p>
          </div>
          <div className="post__btns">
            <MyButton onClick={() => remove(post)}>Delete it</MyButton>
          </div>
        </div>
      </div>
    );
}

export default Post;
