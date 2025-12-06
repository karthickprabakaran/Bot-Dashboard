
import React from "react";
import { useBots } from "../../context/BotContext";

const BotTab = () => {
  const { bots } = useBots();

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3">Bots Summary</h2>
      <p className="text-gray-600 mb-4">
        Overview of your robot fleet and their real-time performance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-medium">{bot.name}</h3>
            <p className="text-sm text-gray-600">Status: {bot.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotTab;