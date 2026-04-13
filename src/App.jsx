import { Routes, Route } from "react-router";
import "./App.css";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
