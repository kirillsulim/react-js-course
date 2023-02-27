import React from "react";

import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";


const PostFilter = ({filter, setFilter, ...props}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
                />
            <MySelect
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e.target.value})}
                defaultValue="Sort by"
                options={[
                    {value: "title", name: "Sort by title"},
                    {value: "body", name: "Sort by body"}
                ]}
                />
        </div>
    )
};

export default PostFilter;
