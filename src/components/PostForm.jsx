import React from "react";
import { useState } from "react";

import MyButton from "./ui/button/MyButton";
import MyInput from "./ui/input/MyInput";


const PostForm = ({create, ...props}) => {
    const emptyPost = {
        title: "",
        body: ""
    };

    const [post, setPost] = useState(emptyPost);

    const addNewPost = (e) => {
        e.preventDefault();
        create({
            ...post,
            id: Date.now()
        });
        setPost(emptyPost);
    };

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Title"
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Body"
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Post it</MyButton>
        </form>

    )
};

export default PostForm;
