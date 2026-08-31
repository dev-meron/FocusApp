import { createContext, useContext, useState } from "react";

const taskContext = createContext();

export default function TaskProvider({ children }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");

  const value = {
    task,
    setTask,
    tasks,
    setTasks,
    selectedTask,
    setSelectedTask,
  };
  return <taskContext.Provider value={value}>{children}</taskContext.Provider>;
}

export const useTasks = () => {
  const context = useContext(taskContext);
  return context;
};
