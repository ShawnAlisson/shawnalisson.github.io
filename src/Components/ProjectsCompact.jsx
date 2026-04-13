const ProjectsCompact = ({ title, image, website }) => {
  return (
    <div
      onClick={() => (website ? window.open(website) : null)}
      className="flex flex-col items-center backdrop-contrast-[.9] rounded-2xl m-3 p-3 cursor-pointer"
    >
      <img
        className="max-w-[150px] w-[150px] transition duration-300 hover:scale-95"
        src={image}
        alt={title}
      />
      <p className="mt-5">{title}</p>
    </div>
  );
};

export default ProjectsCompact;
