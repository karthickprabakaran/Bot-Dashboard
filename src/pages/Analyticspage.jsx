import React, { useMemo } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useBots } from "../context/BotContext";
import { useTasks } from "../context/TaskContext";

const COLORS_BOT = ["#10B981", "#F59E0B", "#06B6D4", "#EF4444"]; 
const COLORS_TASK = ["#FBBF24", "#6366F1", "#10B981"]; 

export default function AnalyticsPage() {
  const { bots } = useBots();
  const { tasks } = useTasks();

  const botStatusData = useMemo(() => {
    const counts = { idle: 0, busy: 0, charging: 0, error: 0 };
    bots.forEach((b) => {
      const s = b.status || "idle";
      if (counts[s] !== undefined) counts[s] += 1;
      else counts.idle += 1;
    });
    return [
      { name: "Idle", value: counts.idle, key: "idle" },
      { name: "Busy", value: counts.busy, key: "busy" },
      { name: "Charging", value: counts.charging, key: "charging" },
      { name: "Error", value: counts.error, key: "error" },
    ];
  }, [bots]);

  const taskStatusData = useMemo(() => {
    const counts = { pending: 0, allocated: 0, completed: 0 };
    tasks.forEach((t) => {
      const s = t.status || "pending";
      if (counts[s] !== undefined) counts[s] += 1;
      else counts.pending += 1;
    });
    return [
      { name: "Pending", value: counts.pending, key: "pending" },
      { name: "Allocated", value: counts.allocated, key: "allocated" },
      { name: "Completed", value: counts.completed, key: "completed" },
    ];
  }, [tasks]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <p className="text-sm text-gray-600 mb-6">
        Live overview of fleet status and task pipeline. These two charts help operations quickly
        identify fleet health (errors/charging) and task pipeline bottlenecks (pending vs allocated/completed).
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Bot Status Distribution</h2>
            <div className="text-sm text-gray-500">Total bots: {bots.length}</div>
          </div>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={botStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={40}
                  paddingAngle={4}
                  label={(entry) => `${entry.name} (${entry.value})`}
                >
                  {botStatusData.map((entry, index) => (
                    <Cell key={`cell-bot-${index}`} fill={COLORS_BOT[index % COLORS_BOT.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Count"]} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Task Status Overview</h2>
            <div className="text-sm text-gray-500">Total tasks: {tasks.length}</div>
          </div>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={40}
                  paddingAngle={4}
                  label={(entry) => `${entry.name} (${entry.value})`}
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-task-${index}`} fill={COLORS_TASK[index % COLORS_TASK.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Count"]} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}