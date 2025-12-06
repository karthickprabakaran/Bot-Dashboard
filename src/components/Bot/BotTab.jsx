
import React from "react";
import { useBots } from "../../context/BotContext";
import Card from "./BotInfoCard";

const BotTab = () => {
  const { bots } = useBots();
   const totalBots = bots.length;
  const idleBots = bots.filter(b => b.status === "idle").length;
  const busyBots = bots.filter(b => b.status === "busy").length;
  const errorBots = bots.filter(b => b.status === "error").length;

  return (
    <>
      <h2 className="text-3xl font-extrabold mb-8 text-black">
        Bot Overview
      </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card label="Total Bots" value={totalBots} type="total" />
        <Card label="Idle Bots" value={idleBots} type="idle" />
        <Card label="Busy Bots" value={busyBots} type="busy" />
        <Card label="Bots in Error" value={errorBots} type="error" />
      </div>
    </>
  );
};

export default BotTab;