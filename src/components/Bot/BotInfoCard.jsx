import React from "react";

const Card = ({ label, value, type }) => {
  const colorClasses = {
    total: "bg-black text-white",
    idle: "bg-[#1EAD55] text-white",       
    busy: "bg-[#ED1C24] text-white",       
    error: "bg-[#333333] text-white",      
    pending: "bg-[#F5F5F5] text-black",   
  };

  const selectedClass = colorClasses[type] || "bg-black text-white";

  return (
    <div className={`p-5 rounded-lg shadow-lg ${selectedClass}`}>
      <p className="text-sm opacity-80 font-medium">{label}</p>
      <h2 className="text-3xl font-bold mt-1">{value}</h2>
    </div>
  );
};

export default Card;