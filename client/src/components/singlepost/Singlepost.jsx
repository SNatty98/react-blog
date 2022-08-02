import "./singlepost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Singlepost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
      </div>
      <h1 className="singlePostTitle">
        {post.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAu">
          Author : 
          <a className="link" href={`/?user=${post.username}`}>
          <b> {post.username}</b>
          </a>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
};

export default Singlepost;
