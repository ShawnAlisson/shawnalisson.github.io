import { useNavigate, useLocation } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/", onClick: () => navigate("/") },
    {
      label: "Projects",
      path: "/projects",
      onClick: () => navigate("/projects"),
    },
    {
      label: "Blog",
      path: null,
      onClick: () =>
        window.open("https://blog.shayan.pahlavan.co.uk", "_blank"),
    },
  ];

  return (
    <nav className="sticky top-4 z-50 backdrop-blur-2xl bg-white/60 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700/30 rounded-2xl px-2 py-1.5 shadow-lg max-w-200 w-full mb-8">
      <div className="flex gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              item.path && isActive(item.path)
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100"
            }`}
            onClick={item.onClick}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
