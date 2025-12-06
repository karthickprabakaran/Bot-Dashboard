import { createContext, useState, useContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => {
      if (newTask.priority === "high") {
        let indexAfterHigh = prev.findIndex(t => t.priority !== "high");

        if (indexAfterHigh === -1) indexAfterHigh = prev.length;

        const updated = [
          ...prev.slice(0, indexAfterHigh),
          newTask,
          ...prev.slice(indexAfterHigh),
        ];

        return updated;
      }

      return [...prev, newTask];
    });
  };

  const removeTopTask = () => {
    setTasks((prev) => prev.slice(1));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTopTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);