import React from "react";

const BotCard = ({ bot }) => {
  const statusColor = {
    idle: "text-gray-500",
    busy: "text-blue-500",
    charging: "text-green-500",
    error: "text-red-500",
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="font-bold text-lg mb-2">Bot #{bot.id}</h2>
      <p>Battery: {bot.battery}%</p>
      <p className={statusColor[bot.status]}>Status: {bot.status}</p>
      <p>Current Task: {bot.currentTask}</p>
      <p>Speed: {bot.speed} m/s</p>
      <p>Last Updated: {bot.lastUpdated}</p>
    </div>
  );
};

export default BotCard;