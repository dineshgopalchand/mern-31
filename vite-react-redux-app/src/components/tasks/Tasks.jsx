import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";
import { TaskContext } from "../../store/task";
import { useContext } from "react";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <h3>Tasks ({tasks.length})</h3>
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default Tasks;
