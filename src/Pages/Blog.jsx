import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Components/NavBar";
import SinglePost from "../Components/SinglePost";
import blog from "../Configs/blog.json";

const Blog = () => {
  const { posts } = blog;
  return (
    <Box m="5" p="5">
      <NavBar />
      {posts.map((post) => (
        <SinglePost
          title={post.title}
          icon={post.icon}
          content={post.content}
          changelog={post.changelog}
          date={post.date}
        />
      ))}
    </Box>
  );
};

export default Blog;
