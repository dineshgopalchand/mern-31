import { useContext } from "react";
import { TaskContext } from "../../store/task";
import Tasks from "../tasks/Tasks";
import "./Dashboard.css";
import Counter from "./../counter/Counter";
export const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Dashboard <small> (T:{tasks.length}) </small>
      </h2>
      <hr />
      <Tasks />
      <Counter />
    </div>
  );
};
