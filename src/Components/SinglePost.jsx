import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SinglePost = ({ title, content, date }) => {
  return (
    <Box
      boxShadow="lg"
      display={"flex"}
      flexDir="column"
      align="start"
      backdropFilter="auto"
      backdropContrast="90%"
      borderRadius={"25"}
      my="4"
    >
      <Text mx="10" my="2" fontSize={"3xl"}>
        {title}
      </Text>
      <Text mx="8" my="2">
        {content}
      </Text>

      <Box
        mx="2"
        my="2"
        backdropFilter="auto"
        backdropContrast="90%"
        borderRadius={"25"}
      >
        <Text mx="4">{date}</Text>
      </Box>
    </Box>
  );
};

export default SinglePost;
