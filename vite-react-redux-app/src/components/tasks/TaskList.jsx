import { useContext } from "react";
import { TaskContext } from "../../store/task";
import { TASK } from "./../../constant/task";

export const TaskList = () => {
  const { tasks, dispatchTask } = useContext(TaskContext);
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              onClick={() => {
                dispatchTask({ type: TASK.DELETE, payload: task.id });
              }}
            >
              {task.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
