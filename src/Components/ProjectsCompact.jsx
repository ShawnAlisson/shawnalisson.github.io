import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProjectsCompact = ({ title, image }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      align='center'
      boxShadow='lg'
      backdropFilter='auto'
      backdropContrast='90%'
      borderRadius={"15"}
      m='3'
      p={"3"}
    >
      <Image
        className='transform transition duration-300 hover:scale-95'
        borderRadius={"40"}
        maxW='150'
        w='150'
        src={image}
      ></Image>
      <Text mt='5'>{title}</Text>
    </Box>
  );
};

export default ProjectsCompact;
