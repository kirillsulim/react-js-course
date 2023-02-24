import React from "react";

const Post = (props) => {
    return (
        <div className="post">
        <div className="post__content">
          <p><strong>{props.post.id}. {props.post.title}</strong></p>
          <div>
            <p>{props.post.body}</p>
          </div>
          <div className="post__btns">
            <button onClick={() => {}}>Delete it</button>
          </div>
        </div>
      </div>
    );
}

export default Post;
