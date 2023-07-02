import {
  Avatar,
  Box,
  Button,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCompact from "../Components/BlogCompact";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ProjectsCompact from "../Components/ProjectsCompact";
import blog from "../Configs/blog.json";
import project from "../Configs/projects.json";

const Home = () => {
  const navigate = useNavigate();
  const { posts } = blog;
  const { projects } = project;
  return (
    <VStack m="5" p="5">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavBar />

      <Box
        w="100%"
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Box
          backdropFilter="auto"
          backdropContrast="90%"
          boxShadow="lg"
          p="2"
          borderRadius={"15"}
          w={{ base: "100%", md: "55%" }}
          align="center"
          display={"flex"}
          flexDir="column"
          my="4"
          mx={{ base: "0", md: "4" }}
          justifyContent="space-between"
        >
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            w="100%"
            p="5"
            justifyContent={"space-between"}
          >
            <Box justifyContent={"center"} display={"flex"}>
              <Avatar
                boxShadow="lg"
                name="S A"
                src="/assets/Memoji.png"
                size={"2xl"}
              />
            </Box>

            <Box
              mt="8"
              display={"flex"}
              flexDir={"column"}
              justifyContent="space-between"
            >
              <Box
                display={"flex"}
                flexDir={{ base: "column", sm: "row" }}
                justifyContent={"center"}
              >
                <Text mx="1" fontSize={"26"}>
                  Shayan
                </Text>
                <Text fontSize={"26"} fontWeight={"bold"}>
                  Alizadeh
                </Text>
              </Box>

              <Contacts />
            </Box>
          </Box>
          <Box display="flex" flexDirection={"column"}></Box>
        </Box>
        <Box
          boxShadow="lg"
          align="start"
          backdropFilter="auto"
          backdropContrast="90%"
          p="3"
          borderRadius={"15"}
          w="100%"
          my="4"
          mx={{ base: "0", md: "4" }}
        >
          {posts.slice(0, 4).map((post, i) => (
            <BlogCompact title={post.title} date={post.date} />
          ))}

          <Button
            boxShadow="lg"
            m="2"
            w="20"
            borderRadius={"10"}
            onClick={() => {
              navigate("/blog");
            }}
          >
            More
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} w="100%">
        <Box
          boxShadow="lg"
          display={"flex"}
          flexDir="column"
          backdropFilter="auto"
          backdropContrast="90%"
          p="3"
          borderRadius={"15"}
          w="100%"
          mx={{ base: "0", md: "4" }}
          my="4"
        >
          <SimpleGrid minChildWidth="200px" w="100%">
            {projects.slice(0, 4).map((project, i) => (
              <ProjectsCompact title={project.title} image={project.image} />
            ))}
          </SimpleGrid>
          <Button
            boxShadow="lg"
            w="20"
            mx="2"
            borderRadius={"10"}
            onClick={() => {
              navigate("/projects");
            }}
          >
            More
          </Button>
        </Box>
      </Box>
      <Footer />
    </VStack>
  );
};

export default Home;
