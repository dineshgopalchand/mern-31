import { createContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  dispatchTask: (action, payload) => {
    console.log(action, payload);
  },
});
