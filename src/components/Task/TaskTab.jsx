
import React from "react";
import { useTasks } from "../../context/TaskContext";

const TaskTab = () => {
  const { tasks } = useTasks();

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3">Task Summary</h2>
      <p className="text-gray-600 mb-4">Overview of pending and completed tasks.</p>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-medium">{task.title}</h3>
            <p className="text-sm text-gray-600">Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTab;