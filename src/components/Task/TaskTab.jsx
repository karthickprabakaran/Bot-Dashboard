import { useTasks } from "../../context/TaskContext";

const TaskTab = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(t => t.status === "pending").length;
  const allocatedTasks = tasks.filter(t => t.status === "allocated").length;
  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const tasksWithBlockers = tasks.filter(t => t.blocker).length;

  return (
    <>
      <h2 className="text-3xl font-extrabold mb-8 text-black">
        Tasks Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard label="Total Tasks" value={totalTasks} type="total" />
        <SummaryCard label="Pending Tasks" value={pendingTasks} type="pending" />
        <SummaryCard label="Allocated Tasks" value={allocatedTasks} type="allocated" />
        <SummaryCard label="Completed Tasks" value={completedTasks} type="completed" />
        <SummaryCard label="Tasks With Blockers" value={tasksWithBlockers} type="blocker" />
      </div>
    </>
  );
};

const SummaryCard = ({ label, value, type }) => {
  const bgMap = {
    total: "bg-black",
    pending: "bg-yellow-500",
    allocated: "bg-blue-600",
    completed: "bg-green-600",
    blocker: "bg-red-600"
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg text-white ${bgMap[type]}`}
    >
      <p className="text-lg font-medium mb-2">{label}</p>
      <p className="text-4xl font-extrabold">{value}</p>
    </div>
  );
};

export default TaskTab;