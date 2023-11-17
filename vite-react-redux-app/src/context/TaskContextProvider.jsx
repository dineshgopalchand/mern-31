import { useReducer } from "react";
import { TaskContext } from "../store/task";
import { TASK } from "../constant/task";

const taskReducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case TASK.ADD: {
      const uniqueNumber = Date.now();
      return [...state, { id: uniqueNumber, title: "Task " + uniqueNumber }];
    }
    case TASK.DELETE:
      return state.filter((task) => task.id != action.payload);
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const TaskContextProvider = ({ children }) => {
  const [tasks, dispatchTask] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatchTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
