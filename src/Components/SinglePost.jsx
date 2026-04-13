const SinglePost = ({ title, content, icon, changelog, date }) => {
  return (
    <div className="backdrop-blur-2xl bg-white/50 dark:bg-gray-900/50 border border-white/30 dark:border-gray-700/30 shadow-lg flex flex-col items-start rounded-2xl my-4 p-5">
      <div className="flex items-center gap-3 mb-3">
        <img className="h-10 w-10 rounded-full shadow-md" src={icon} alt={title} />
        <p className="text-2xl font-semibold">{title}</p>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {content}
      </p>
      {changelog && changelog.length > 0 && (
        <div className="ml-2 mb-3">
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-0.5">
            {changelog.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {date && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
          {date}
        </p>
      )}
    </div>
  );
};

export default SinglePost;
