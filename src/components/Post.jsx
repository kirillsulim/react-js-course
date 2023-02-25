import React from "react";

const Post = ({post, remove, ...props}) => {
    console.log(post);
    return (
        <div className="post">
        <div className="post__content">
          <p><strong>{post.id}. {post.title}</strong></p>
          <div>
            <p>{post.body}</p>
          </div>
          <div className="post__btns">
            <button onClick={() => remove(post)}>Delete it</button>
          </div>
        </div>
      </div>
    );
}

export default Post;
