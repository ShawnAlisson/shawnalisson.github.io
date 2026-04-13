import config from "../Configs/index.json";

const Footer = () => {
  const { about } = config;
  return (
    <div className="py-6 text-center text-xs text-gray-400 dark:text-gray-600">
      <p>
        <a
          href="https://github.com/ShawnAlisson/thePersonal"
          className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          {about.build}
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
