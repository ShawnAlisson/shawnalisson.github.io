import React, { useEffect, useState } from "react";
import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import TonalityIcon from "@mui/icons-material/Tonality";

const ColorModeSelector = () => {
  const { colorMode, setColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.700");
  const bg_light = useColorModeValue("gray.300", "gray.600");

  const [systemColor, setSystemColor] = useState("true");

  const systemColorHandler = () => {
    setColorMode("system");
    localStorage.setItem("useSystemColor", true);
    setSystemColor("true");
  };

  const lightColorHandler = () => {
    setColorMode("light");
    localStorage.setItem("useSystemColor", false);
    setSystemColor("false");
  };

  const darkColorHandler = () => {
    setColorMode("dark");
    localStorage.setItem("useSystemColor", false);
    setSystemColor("false");
  };

  useEffect(() => {
    // setSystemColor(localStorage.setItem("useSystemColor"));
    // setSystemColor("useSystemColor");
    setColorMode("system");
  }, []);

  return (
    <HStack
      bg={bg}
      justifyContent={"space-between"}
      borderRadius={"25"}
      px="0"
      boxShadow="lg"
    >
      <IconButton
        variant={"ghost"}
        onClick={lightColorHandler}
        borderRadius={"25"}
        color={
          colorMode === "light" && systemColor === "false" ? "blue.400" : ""
        }
        bg={colorMode === "light" && systemColor === "false" ? bg_light : ""}
      >
        <LightModeRoundedIcon />
      </IconButton>
      <IconButton
        variant={"ghost"}
        onClick={systemColorHandler}
        borderRadius={"25"}
        color={systemColor === "true" ? "blue.400" : ""}
        bg={systemColor === "true" ? bg_light : ""}
      >
        <TonalityIcon />
      </IconButton>
      <IconButton
        variant={"ghost"}
        onClick={darkColorHandler}
        borderRadius={"25"}
        color={
          colorMode === "dark" && systemColor === "false" ? "blue.400" : ""
        }
        bg={colorMode === "dark" && systemColor === "false" ? bg_light : ""}
      >
        <DarkModeRoundedIcon />
      </IconButton>
    </HStack>
  );
};

export default ColorModeSelector;
