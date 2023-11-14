import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard";
import { TaskContext } from "./store/task";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask() {
    const uniqueNumber = Date.now();
    setTasks((prevState) => [
      ...prevState,
      { id: uniqueNumber, title: "Task " + uniqueNumber },
    ]);
  }
  function deleteTask(taskId) {
    setTasks((prevTaskList) => {
      return prevTaskList.filter((task) => task.id != taskId);
    });
  }
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      <Dashboard />
    </TaskContext.Provider>
  );
}

export default App;
