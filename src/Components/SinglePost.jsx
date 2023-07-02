import { Box, IconButton, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const SinglePost = ({ title, content, icon, changelog, date }) => {
  return (
    <Box
      boxShadow="lg"
      display={"flex"}
      flexDir="column"
      align="start"
      backdropFilter="auto"
      backdropContrast="90%"
      borderRadius={"15"}
      my="4"
    >
      <Box display={"flex"} mx="2" my="2">
        <Image mx="2" h="45" borderRadius={"25"} src={icon}></Image>
        <Text fontSize={"3xl"}>{title}</Text>
      </Box>

      <Text mx="8" my="2">
        {content}
      </Text>
      <Box mx="10">
        <ul>
          {changelog?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Box>

      <Box
        display={"flex"}
        flexDir={"row"}
        mx="2"
        my="2"
        backdropFilter="auto"
        backdropContrast="90%"
        borderRadius={"25"}
      >
        <Text fontSize={"14"} mx="4">
          {date}
        </Text>
      </Box>
    </Box>
  );
};

export default SinglePost;
