import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskTab = () => {
  const { tasks, removeTopTask } = useContext(TaskContext);

  useEffect(() => {
    if (tasks.length === 0) return;

    const timer = setInterval(() => {
      removeTopTask();
    }, 3000);

    return () => clearInterval(timer);
  }, [tasks]);

  const getPriorityBadge = (priority) => {
    const styles = {
      high: "bg-[#ED1C24] text-white",
      medium: "bg-black text-white",
      low: "bg-gray-300 text-black",
    };
    return styles[priority] || styles.medium;
  };

  return (
    <div className="p-10">

      <h2 className="text-3xl font-extrabold tracking-wide mb-8 text-black">
        Task Queue
      </h2>

      <div className="space-y-6">
        {tasks.length === 0 && (
          <p className="text-gray-500 text-lg">No pending tasks.</p>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              p-6 bg-white rounded-lg shadow-md border border-gray-200 
              hover:shadow-lg transition  cursor-default
            "
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg text-primary font-bold text-black">
                Task #{task.id}
              </h3>

              <span
                className={`
                  px-3 py-1 rounded text-xs font-bold uppercase tracking-wider 
                  ${getPriorityBadge(task.priority)}
                `}
              >
                {task.priority}
              </span>
            </div>

            <div className="space-y-1 text-gray-700">
              <p>
                <span className="font-semibold">Pickup:</span> {task.pickup}
              </p>
              <p>
                <span className="font-semibold">Drop:</span> {task.drop}
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Created: {task.createdAt.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTab;