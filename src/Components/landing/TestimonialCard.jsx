const TestimonialCard = ({ rating, review, name, jobTitle, avatar }) => {
  return (
    <div className=" p-6 border border-gray-200 rounded-xl  shadow-md">
      <div className="text-xl">{rating}</div>
      <p className="mt-6 text-gray-700 leading-7">{review}</p>
      <div className="flex items-center gap-2 mt-6">
        <span>{avatar}</span>
        <strong>{name}</strong>
      </div>

      <p className="text-gray-500">{jobTitle}</p>
    </div>
  );
};

export default TestimonialCard;
