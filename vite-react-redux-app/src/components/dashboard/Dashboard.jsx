import { TaskContext } from "../../store/task";
import Tasks from "../tasks/Tasks";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <TaskContext.Consumer>
      {(tCtx) => {
        return (
          <div className="dashboard">
            <h2 style={{ textAlign: "center" }}>
              Dashboard <small> (T:{tCtx.tasks.length}) </small>
            </h2>
            <hr />
            <Tasks />
          </div>
        );
      }}
    </TaskContext.Consumer>
  );
};
