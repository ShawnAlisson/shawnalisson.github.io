import { Box, Text } from "@chakra-ui/react";
import React from "react";

const BlogCompact = ({ title, date }) => {
  return (
    <Box
      backdropFilter="auto"
      backdropContrast="90%"
      display={"flex"}
      justifyContent="space-between"
      borderRadius="15"
      px="3"
      py="2"
      my="3"
      boxShadow="lg"
    >
      <Text>{title}</Text>
      <Text>{date}</Text>
    </Box>
  );
};

export default BlogCompact;
