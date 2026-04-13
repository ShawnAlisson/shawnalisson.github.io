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
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center px-5 pt-6">
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

        <div className="max-w-200 w-full animate-fade-in-up">
          <div className="backdrop-blur-2xl bg-white/50 dark:bg-gray-900/50 border border-white/30 dark:border-gray-700/30 shadow-xl rounded-3xl p-6 md:p-8 w-full">
            <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 items-center">
              <div className="shrink-0">
                <img
                  className="shadow-xl rounded-full w-36 h-36 object-cover ring-4 ring-white/30 dark:ring-gray-700/30 transition duration-300 hover:scale-[1.03]"
                  src={index.avatar}
                  alt="S A"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-3xl font-light tracking-tight">
                    {index.firstName}
                  </span>
                  <span className="text-3xl font-bold tracking-tight">
                    {index.lastName}
                  </span>
                </div>
                <p className="mt-1 mb-5 text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                  {index.title}
                </p>
                <Contacts />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-200 w-full mt-6 animate-fade-in-up animation-delay-200">
          <div className="backdrop-blur-2xl bg-white/50 dark:bg-gray-900/50 border border-white/30 dark:border-gray-700/30 shadow-xl rounded-3xl p-5 w-full">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] w-full">
              {projects
                .filter((p) => p.website || p.github)
                .slice(0, 8)
                .map((project, i) => (
                  <ProjectsCompact
                    key={i}
                    title={project.title}
                    image={project.image}
                    link={project.website || project.github}
                  />
                ))}
            </div>
            <div className="mt-4 px-2">
              <button
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm shadow-md hover:shadow-lg rounded-xl px-6 py-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                onClick={() => navigate("/projects")}
              >
                All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
