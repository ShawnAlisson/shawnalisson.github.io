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
import index from "../Configs/index.json";

const Home = () => {
  const navigate = useNavigate();
  const { posts } = blog;
  const { projects } = project;
  return (
    <div className="">
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
          maxW={"800px"}
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
            w={{ base: "100%", md: "100%" }}
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
              alignItems={"center"}
            >
              <Box justifyContent={"center"} display={"flex"}>
                <Avatar
                  className="transform transition duration-300 hover:scale-95"
                  boxShadow="lg"
                  name="S A"
                  src={index.avatar}
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
                    {index.firstName}
                  </Text>
                  <Text fontSize={"26"} fontWeight={"bold"}>
                    {index.lastName}
                  </Text>
                </Box>

                <Text mb={4} fontSize={"14"} fontWeight={"thin"}>
                  {index.title}
                </Text>

                <Contacts />
              </Box>
            </Box>
            <Box display="flex" flexDirection={"column"}></Box>
          </Box>
        </Box>
        <Box display={"flex"} w="100%" maxW={"800px"}>
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
              {projects.slice(0, 6).map((project, i) => (
                <ProjectsCompact
                  title={project.title}
                  image={project.image}
                  website={project.website}
                />
              ))}
            </SimpleGrid>
            <Button
              fontWeight={"thin"}
              boxShadow="lg"
              w="36"
              mx="2"
              borderRadius={"10"}
              onClick={() => {
                navigate("/projects");
              }}
            >
              All Projects
            </Button>
          </Box>
        </Box>
      </VStack>
      <div className=" flex flex-row z-50  justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
