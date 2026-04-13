import config from "../Configs/index.json";

const Footer = () => {
  const { about } = config;
  return (
    <div className="mb-4 opacity-50 font-thin text-xs">
      <p>
        <a href="https://github.com/ShawnAlisson/thePersonal">{about.build}</a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
