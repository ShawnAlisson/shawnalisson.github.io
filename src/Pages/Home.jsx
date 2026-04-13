import { useNavigate } from "react-router";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ProjectsCompact from "../Components/ProjectsCompact";
import project from "../Configs/projects.json";
import index from "../Configs/index.json";

const Home = () => {
  const navigate = useNavigate();
  const { projects } = project;
  return (
    <div>
      <div className="flex flex-col items-center m-5 p-5">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavBar />

        <div className="max-w-[800px] w-full flex flex-col md:flex-row items-center justify-between">
          <div className="backdrop-contrast-[.9] shadow-lg p-2 rounded-2xl w-full text-center flex flex-col my-4 mx-0 md:mx-4 justify-between">
            <div className="flex flex-col md:flex-row w-full p-5 justify-between items-center">
              <div className="flex justify-center">
                <img
                  className="shadow-lg rounded-full w-32 h-32 object-cover transition duration-300 hover:scale-95"
                  src={index.avatar}
                  alt="S A"
                />
              </div>
              <div className="mt-8 flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row justify-center">
                  <p className="mx-1 text-[26px]">{index.firstName}</p>
                  <p className="text-[26px] font-bold">{index.lastName}</p>
                </div>
                <p className="mb-4 text-sm font-thin">{index.title}</p>
                <Contacts />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[800px]">
          <div className="shadow-lg flex flex-col backdrop-contrast-[.9] p-3 rounded-2xl w-full mx-0 md:mx-4 my-4">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
              {projects.slice(0, 6).map((project, i) => (
                <ProjectsCompact
                  key={i}
                  title={project.title}
                  image={project.image}
                  website={project.website}
                />
              ))}
            </div>
            <button
              className="font-thin shadow-lg w-36 mx-2 rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => navigate("/projects")}
            >
              All Projects
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row z-50 justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
