import NavBar from "../Components/NavBar";
import SinglePost from "../Components/SinglePost";
import blog from "../Configs/blog.json";

const Blog = () => {
  const { posts } = blog;
  return (
    <div className="m-5 p-5">
      <NavBar />
      {posts.map((post, i) => (
        <SinglePost
          key={i}
          title={post.title}
          icon={post.icon}
          content={post.content}
          changelog={post.changelog}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default Blog;
