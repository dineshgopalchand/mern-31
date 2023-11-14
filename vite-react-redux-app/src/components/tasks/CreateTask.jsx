import { TaskContext } from "../../store/task";

export const CreateTask = () => {
  return (
    <TaskContext.Consumer>
      {(taskCTX) => {
        return <button
          onClick={() => {
            taskCTX.addTask();
          }}
        >
          Create task
        </button>;
      }}
    </TaskContext.Consumer>
  );
};
