import { useContext } from "react";
import { TaskContext } from "../../store/task";

export const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              onClick={() => {
                deleteTask(task.id);
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
