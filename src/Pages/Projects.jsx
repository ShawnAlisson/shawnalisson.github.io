import NavBar from "../Components/NavBar";
import SingleProject from "../Components/SingleProject";
import project from "../Configs/projects.json";
import Footer from "../Components/Footer";

const Projects = () => {
  const { projects } = project;
  return (
    <div className="flex flex-col items-center m-5 p-5">
      <NavBar />
      <div className="max-w-[1000px]">
        {projects.map((project, i) => (
          <SingleProject
            key={i}
            title={project.title}
            content={project.content}
            image={project.image}
            website={project.website}
            github={project.github}
          />
        ))}
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
