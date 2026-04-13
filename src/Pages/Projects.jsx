import NavBar from "../Components/NavBar";
import SingleProject from "../Components/SingleProject";
import project from "../Configs/projects.json";
import Footer from "../Components/Footer";

const Projects = () => {
  const { projects } = project;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center px-5 pt-6">
        <NavBar />
        <div className="max-w-225 w-full animate-fade-in-up">
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
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
