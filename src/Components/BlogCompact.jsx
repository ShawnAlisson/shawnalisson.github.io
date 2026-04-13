const BlogCompact = ({ title, date }) => {
  return (
    <div className="flex justify-between backdrop-contrast-[.9] rounded-2xl px-3 py-2 my-3 shadow-lg">
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
};

export default BlogCompact;
