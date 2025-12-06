import React, { useState } from "react";
import { useBots } from "../context/BotContext";
import { useTasks } from "../context/TaskContext";

import Card from "../components/Bot/BotInfoCard";
import TabButton from "../components/TabButtons"; 

import BotTab from "../components/Bot/BotTab";
import TaskTab from "../components/Task/TaskTab";

const Dashboard = () => {
  const { bots } = useBots();
  const { tasks } = useTasks();

  const [activeTab, setActiveTab] = useState("bots");

  const totalBots = bots.length;
  const idleBots = bots.filter(b => b.status === "idle").length;
  const busyBots = bots.filter(b => b.status === "busy").length;
  const errorBots = bots.filter(b => b.status === "error").length;
  const pendingTasks = tasks.length;

  return (
    <div className="p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card label="Total Bots" value={totalBots} type="total" />
        <Card label="Idle Bots" value={idleBots} type="idle" />
        <Card label="Busy Bots" value={busyBots} type="busy" />
        <Card label="Bots in Error" value={errorBots} type="error" />
        <Card label="Pending Tasks" value={pendingTasks} type="pending" />
      </div>

      <div className="flex border-b mb-6">
        <TabButton
          label="Bots"
          active={activeTab === "bots"}
          onClick={() => setActiveTab("bots")}
        />
        <TabButton
          label="Tasks"
          active={activeTab === "tasks"}
          onClick={() => setActiveTab("tasks")}
        />
      </div>

      {activeTab === "bots" && <BotTab />}
      {activeTab === "tasks" && <TaskTab />}
    </div>
  );
};

export default Dashboard;