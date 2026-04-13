import NavBar from "../Components/NavBar";
import SinglePost from "../Components/SinglePost";
import blog from "../Configs/blog.json";
import Footer from "../Components/Footer";

const Blog = () => {
  const { posts } = blog;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center px-5 pt-6">
        <NavBar />
        <div className="max-w-200 w-full animate-fade-in-up">
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
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
