import React from "react";

const PRIMARY_COLOR = "#EE3C26"; 
const SECONDARY_COLOR = "#1B2A49"; 
const TEXT_COLOR = "#FFFFFF"; 

const BotCard = ({ bot }) => {
  const statusColor = {
    idle: "text-green-400",
    busy: "text-yellow-400",
    charging: `text-[${PRIMARY_COLOR}]`, 
    error: `text-[${PRIMARY_COLOR}]`,
  };

  const batteryWarning = bot.battery <= 20 && bot.status !== "charging";

  return (
    <div
      style={{ backgroundColor: SECONDARY_COLOR, color: TEXT_COLOR }}
      className={`p-4 rounded-lg shadow-xl border-2 ${
        bot.status === 'error' ? `border-[${PRIMARY_COLOR}]` : 'border-transparent'
      } transition-all duration-200 w-64`}
    >
      <div className="flex justify-between items-baseline mb-3 border-b border-gray-700 pb-2">
        <h2
          style={{ color: PRIMARY_COLOR }}
          className="font-bold text-2xl"
        >
          Bot No: {String(bot.id)}
        </h2>
        <p className="text-xs opacity-60">
          {bot.lastUpdated}
        </p>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center text-sm font-medium mb-1">
          <p>
            <span className={`font-bold uppercase ${statusColor[bot.status]}`}>
              {bot.status}
            </span>
          </p>
          <p className={batteryWarning ? `font-bold text-[${PRIMARY_COLOR}]` : 'opacity-80'}>
            Battery: {bot.battery}%
          </p>
        </div>
        
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            style={{
              width: `${bot.battery}%`,
              backgroundColor: batteryWarning ? PRIMARY_COLOR : 'rgb(74 222 128)', 
            }}
            className="h-full transition-all duration-500"
          ></div>
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="opacity-60">Task:</span>
          <span className="font-semibold">{bot.currentTask}</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">Speed:</span>
          <span className="font-semibold">{bot.speed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;