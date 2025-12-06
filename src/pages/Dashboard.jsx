import React, { useState } from "react";


import TabButton from "../components/TabButtons"; 

import BotTab from "../components/Bot/BotTab";
import TaskTab from "../components/Task/TaskTab";

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("bots");

 

  return (
    <div className="p-6">
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