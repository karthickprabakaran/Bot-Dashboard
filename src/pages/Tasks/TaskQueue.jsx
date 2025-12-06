import { useEffect } from "react";
import { useTasks } from "../../context/TaskContext";

const TaskQueue = () => {
  const { tasks, removeTopTask } = useTasks();

  useEffect(() => {
    if (tasks.length === 0) return;

    const timer = setInterval(() => {
      removeTopTask();
    }, 3000);

    return () => clearInterval(timer);
  }, [tasks, removeTopTask]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-extrabold mb-8 text-black">Task Queue</h2>

      <div className="space-y-6">
        {tasks.length === 0 && <p className="text-gray-500 text-lg">No pending tasks.</p>}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition cursor-default"
          >
            <h3 className="text-lg font-bold text-black">Task #{task.id}</h3>
            <p><span className="font-semibold">Pickup:</span> {task.pickup}</p>
            <p><span className="font-semibold">Drop:</span> {task.drop}</p>
            {task.blocker && <p className="text-red-600 font-semibold">Has Blocker!</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskQueue;