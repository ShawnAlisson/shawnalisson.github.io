import { Box } from "@chakra-ui/react";
import React from "react";
import config from "../Configs/index.json";
import ColorModeSelector from "./ColorModeSelector";

const Footer = () => {
  const { about } = config;
  return (
    <div className="mb-4 opacity-50 font-thin text-xs">
      {/* <Box m='2'>
        <ColorModeSelector />
      </Box> */}
      <p>
        <a href="https://github.com/ShawnAlisson/thePersonal">{about.build}</a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
