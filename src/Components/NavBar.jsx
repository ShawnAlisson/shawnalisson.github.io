import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      // backdropFilter='auto'
      // backdropContrast='90%'
      maxW={"800px"}
      w="100%"
      borderRadius={"10"}
      p="1"
      // boxShadow='lg'
    >
      <Box display={"flex"} w="100%">
        <Button
          variant={"ghost"}
          borderRadius="10"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        {/* <Button
          variant={"ghost"}
          borderRadius="10"
          onClick={() => {
            navigate("/blog");
          }}
        >
          Blog
        </Button> */}
        <Button
          variant={"ghost"}
          borderRadius="10"
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </Button>
        <Button
          variant={"ghost"}
          borderRadius="10"
          onClick={() => {
            window.open("https://blog.shayan.pahlavan.co.uk", "_blank");
          }}
        >
          Blog
        </Button>
        {/* <Button
          variant={"ghost"}
          borderRadius="25"
          onClick={() => {
            navigate("about");
          }}
        >
          About Me
        </Button> */}
      </Box>
    </Box>
  );
};

export default NavBar;
