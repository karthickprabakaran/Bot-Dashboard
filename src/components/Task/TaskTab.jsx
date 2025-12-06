import { useTasks } from "../../context/TaskContext";

const TaskTab = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(t => t.status === "pending").length;
  const allocatedTasks = tasks.filter(t => t.status === "allocated").length;
  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const tasksWithBlockers = tasks.filter(t => t.blocker).length;

  return (
    <div className="p-10">
      <h2 className="text-3xl font-extrabold mb-8 text-black">Tasks Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <SummaryCard label="Total Tasks" value={totalTasks} color="bg-blue-500" />
        <SummaryCard label="Pending" value={pendingTasks} color="bg-yellow-500" />
        <SummaryCard label="Allocated" value={allocatedTasks} color="bg-purple-500" />
        <SummaryCard label="Completed" value={completedTasks} color="bg-green-500" />
        <SummaryCard label="With Blockers" value={tasksWithBlockers} color="bg-red-500" />
      </div>
    </div>
  );
};

const SummaryCard = ({ label, value, color }) => (
  <div className={`p-5 text-white rounded-xl shadow-md flex flex-col items-start ${color}`}>
    <h3 className="text-sm opacity-90">{label}</h3>
    <p className="text-3xl font-bold mt-1">{value}</p>
  </div>
);

export default TaskTab;