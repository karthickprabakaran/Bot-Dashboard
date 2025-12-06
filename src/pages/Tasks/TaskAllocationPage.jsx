import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

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
    <div className="max-w-xl mx-auto p-10">

      <h2 className="text-3xl font-extrabold mb-8 text-black">
        Allocate New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-200"
      >
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Pickup Location
          </label>
          <input
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            placeholder="Enter pickup location"
            className="
              w-full p-3 border border-gray-300 rounded 
              focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] 
              transition
            "
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Drop Location
          </label>
          <input
            name="drop"
            value={form.drop}
            onChange={handleChange}
            placeholder="Enter drop location"
            className="
              w-full p-3 border border-gray-300 rounded 
              focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] 
              transition
            "
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Priority
          </label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="
              w-full p-3 border border-gray-300 rounded 
              focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] 
              transition bg-white
            "
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Comments
          </label>
          <textarea
            name="comments"
            value={form.comments}
            onChange={handleChange}
            placeholder="Enter any task notes"
            rows="4"
            className="
              w-full p-3 border border-gray-300 rounded 
              focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] 
              transition
            "
          />
        </div>

        <button
          className="
            w-full bg-[#ED1C24] text-white py-3 font-semibold rounded 
            hover:bg-[#c9151c] transition 
            tracking-wide uppercase shadow-md
          "
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskAllocation;