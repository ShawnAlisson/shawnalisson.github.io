const SinglePost = ({ title, content, icon, changelog, date }) => {
  return (
    <div className="shadow-lg flex flex-col items-start backdrop-contrast-[.9] rounded-2xl my-4">
      <div className="flex mx-2 my-2">
        <img className="mx-2 h-[45px] rounded-full" src={icon} alt={title} />
        <p className="text-3xl">{title}</p>
      </div>
      <p className="mx-8 my-2">{content}</p>
      <div className="mx-10">
        <ul className="list-disc list-inside">
          {changelog?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex mx-2 my-2 backdrop-contrast-[.9] rounded-full">
        <p className="text-sm mx-4">{date}</p>
      </div>
    </div>
  );
};

export default SinglePost;
