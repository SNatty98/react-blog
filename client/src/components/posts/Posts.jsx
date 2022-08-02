import "./posts.css";
import Post from "../post/Post";
const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((item) => {
        return (
          <div key={item.title}>
            <Post post={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
