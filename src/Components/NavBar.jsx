import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between max-w-[800px] w-full rounded-lg p-1">
      <div className="flex w-full">
        <button
          className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => navigate("/projects")}
        >
          Projects
        </button>
        <button
          className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() =>
            window.open("https://blog.shayan.pahlavan.co.uk", "_blank")
          }
        >
          Blog
        </button>
      </div>
    </div>
  );
};

export default NavBar;
