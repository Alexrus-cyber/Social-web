import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                New post
                </div>

                    <div className={p.posts}>
                       <Post messsage={"Like you"} count = {"5"}/>
                       <Post messsage={"Like you1"} count = {"6"}/>
                       <Post messsage={"Like you2"} count = {"7"}/>
                       <Post messsage={"Like you3"} count = {"8"}/>
                    </div>
            </div>

    );
}

export default  MyPosts;