const Card = ({ label, value, type }) => {
  const colorMap = {
    total: "border-gray-900",
    idle: "border-green-600",
    busy: "border-yellow-500",
    error: "border-red-600"
  };

  const textMap = {
    total: "text-gray-900",
    idle: "text-green-600",
    busy: "text-gray-900",
    error: "text-red-600"
  };

  return (
    <div
      className={`p-6 bg-white border-2 rounded-sm shadow-sm hover:shadow-md transition cursor-default 
      ${colorMap[type]}`}
    >
      <p className="text-sm font-semibold text-gray-500 tracking-wide mb-2 uppercase">
        {label}
      </p>

      <p className={`text-4xl font-extrabold ${textMap[type]}`}>
        {value}
      </p>
    </div>
  );
};

export default Card;