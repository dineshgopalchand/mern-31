import { TaskContext } from "../../store/task";

export const TaskList = () => {
  return (
    <TaskContext.Consumer>
      {(tCtx) => {
        return <div className="task-list">
          <ul>
            {tCtx.tasks.map((task) => {
              return (
                <li
                  key={task.id}
                  onClick={() => {
                    tCtx.deleteTask(task.id);
                  }}
                >
                  {task.title}
                </li>
              );
            })}
          </ul>
        </div>;
      }}
    </TaskContext.Consumer>
  );
};
