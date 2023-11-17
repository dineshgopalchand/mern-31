import { useState } from "react";
import { TaskContext } from "../store/task";

const TaskContextProvider = (props) => {
  const { children } = props;
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
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
