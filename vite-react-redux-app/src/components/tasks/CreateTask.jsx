import { useContext } from "react";
import { TaskContext } from "../../store/task";
import { TASK } from "../../constant/task";

export const CreateTask = () => {
  const { dispatchTask } = useContext(TaskContext);
  return (
    <button
      onClick={() => {
        dispatchTask({
          type: TASK.ADD,
        });
      }}
    >
      Create task
    </button>
  );
};
