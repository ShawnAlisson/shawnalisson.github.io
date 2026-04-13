const ProjectsCompact = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center rounded-2xl m-2 p-4 group hover:-translate-y-1 transition-all duration-300"
    >
      <div className="rounded-2xl overflow-hidden transition-shadow duration-300">
        <img
          className="w-30 h-30 object-contain transition duration-300 group-hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {title}
      </p>
    </a>
  );
};

export default ProjectsCompact;
