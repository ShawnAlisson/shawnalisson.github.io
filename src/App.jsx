import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode("system");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/blog/" element={<Blog />} exact />
        <Route path="/projects/" element={<Projects />} exact />
      </Routes>
    </div>
  );
}

export default App;
