import React, { useEffect, useState } from "react";
import Tpost from "../components/Tpost";
import InputBox from "../components/InputBox"
import axios from "axios";
import { useSelector } from "react-redux";
import NavBar from "../components/Navbar";


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/posts/fetchPost")
      console.log(res.data.data)
      setPosts(res.data.data)
    }
    fetchdata()
  }, []);
  return (
      <div >
          <NavBar />
          <InputBox />
          {posts.map((post) => {
              console.log("avatar", post.avatar);
              return (
                  <div className="p-10">
                      <Tpost
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
