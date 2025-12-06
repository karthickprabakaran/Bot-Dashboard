import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskQueue = () => {
  const { tasks, removeTopTask } = useContext(TaskContext);

  useEffect(() => {
    if (tasks.length === 0) return;

    const timer = setInterval(() => {
      removeTopTask();
    }, 3000);

    return () => clearInterval(timer);
  }, [tasks]);

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Task Queue</h2>

      <div className="space-y-4">
        {tasks.length === 0 && (
          <p className="text-gray-500">No pending tasks.</p>
        )}

        {tasks.map((task) => (
          <div key={task.id} className="p-4 border rounded shadow-sm">
            <p><b>Pickup:</b> {task.pickup}</p>
            <p><b>Drop:</b> {task.drop}</p>
            <p><b>Priority:</b> {task.priority}</p>
            <p className="text-sm text-gray-500">
              Created: {task.createdAt.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskQueue;