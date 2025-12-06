import React, { useState } from "react";
import { useBots } from "../context/BotContext";
import { useTasks } from "../context/TaskContext";

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
        <Card label="Total Bots" value={totalBots} color="bg-blue-500" />
        <Card label="Idle Bots" value={idleBots} color="bg-green-500" />
        <Card label="Busy Bots" value={busyBots} color="bg-yellow-500" />
        <Card label="Bots in Error" value={errorBots} color="bg-red-500" />
        <Card label="Pending Tasks" value={pendingTasks} color="bg-purple-500" />
      </div>

      <div className="flex border-b mb-6">
        <TabButton label="Bots" active={activeTab === "bots"} onClick={() => setActiveTab("bots")} />
        <TabButton label="Tasks" active={activeTab === "tasks"} onClick={() => setActiveTab("tasks")} />
      </div>

      {activeTab === "bots" && (
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">Bots Summary</h2>
          <p className="text-gray-600">Overview of your robot fleet and their real-time performance.</p>
        </div>
      )}

      {activeTab === "tasks" && (
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">Task Summary</h2>
          <p className="text-gray-600">Overview of pending and completed tasks.</p>
        </div>
      )}

    </div>
  );
};

const Card = ({ label, value, color }) => (
  <div className="p-5 text-white rounded-xl shadow-md flex flex-col items-start" style={{ backgroundColor: color }}>
    <h3 className="text-sm opacity-90">{label}</h3>
    <p className="text-3xl font-bold mt-1">{value}</p>
  </div>
);

const TabButton = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 mr-4 text-sm font-medium border-b-2 transition 
      ${active ? "border-orange-500 text-orange-600" : "border-transparent text-gray-600 hover:text-gray-800"}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Dashboard;