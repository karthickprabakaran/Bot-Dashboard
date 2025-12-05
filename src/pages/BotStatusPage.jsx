import React from "react";
import { useBots } from "../context/BotContext";
import BotCard from "../components/Bot/BotCard";

const BotStatus = () => {
  const { bots } = useBots();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bot Status</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
};

export default BotStatus;