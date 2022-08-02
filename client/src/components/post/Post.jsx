import "./post.css";
import sunnyLandscape from "./sun.jpg";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {" "}
          {post.categories.map((item) => (
            <span className="postCat">{item.name}</span>
          ))}
        </div>
        <a className="link" href={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </a>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
