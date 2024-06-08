import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Components/NavBar";
import SingleProject from "../Components/SingleProject";
import project from "../Configs/projects.json";
import Footer from "../Components/Footer";

const Projects = () => {
  const { projects } = project;
  return (
    <VStack m='5' p='5'>
      <NavBar />
      <Box maxW={1000}>
        {projects.map((project, i) => (
          <SingleProject
            title={project.title}
            content={project.content}
            image={project.image}
            website={project.website}
            github={project.github}
          />
        ))}
      </Box>
      <Box display={"flex"}>
        <Footer />
      </Box>
    </VStack>
  );
};

export default Projects;
