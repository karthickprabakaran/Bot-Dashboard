import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskAllocation = () => {
  const { addTask } = useContext(TaskContext);

  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    priority: "medium",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      pickup: form.pickup,
      drop: form.drop,
      priority: form.priority,
      comments: form.comments,
      createdAt: new Date(),
    };

    addTask(newTask);
    setForm({ pickup: "", drop: "", priority: "medium", comments: "" });
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Allocate New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="pickup"
          value={form.pickup}
          onChange={handleChange}
          placeholder="Pickup Location"
          className="w-full border p-3 rounded"
        />

        <input
          name="drop"
          value={form.drop}
          onChange={handleChange}
          placeholder="Drop Location"
          className="w-full border p-3 rounded"
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>

        <textarea
          name="comments"
          value={form.comments}
          onChange={handleChange}
          placeholder="Comments"
          className="w-full border p-3 rounded"
        />

        <button className="bg-orange-500 text-white px-6 py-2 rounded">
          Add Task
        </button>

      </form>
    </div>
  );
};

export default TaskAllocation;