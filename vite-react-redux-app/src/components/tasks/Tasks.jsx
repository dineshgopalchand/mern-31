import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";
import { TaskContext } from "../../store/task";

const Tasks = () => {
  return (
    <TaskContext.Consumer>
      {(taskCTX) => {
        return (
          <div>
            <h3>Tasks ({taskCTX.tasks.length})</h3>
            <CreateTask  />
            <TaskList />
          </div>
        );
      }}
    </TaskContext.Consumer>
  );
};

export default Tasks;
