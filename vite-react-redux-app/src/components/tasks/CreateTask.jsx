import { useContext } from "react";
import { TaskContext } from "../../store/task";

export const CreateTask = () => {
  const { addTask } = useContext(TaskContext);
  return (
    <button
      onClick={() => {
        addTask();
      }}
    >
      Create task
    </button>
  );
};
