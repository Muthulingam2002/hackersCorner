import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import InputBox from "../components/InputBox";
import axios from "axios";
import { useSelector } from "react-redux";
import NavBar from "../components/Navbar";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_URL}posts/fetchPost`
            );
            console.log(res.data.data);
            setPosts(res.data.data);
        };
        fetchdata();
    }, []);
    return (
        <div className=" min-h-screen ">
            <NavBar />
            <InputBox />
            {posts.map((post) => {
                console.log("avatar", post.avatar);REACT_APP_URL;
                return (
                    <div className="p-10">
                        <Post
                            name={post.name}
                            id={post.id}
                            image={post.image}
                            avatar={post.avatar}
                            isLiked={post.isliked}
                            caption={post.caption}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;
