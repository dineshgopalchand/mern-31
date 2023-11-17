import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard";
import TaskContextProvider from "./context/TaskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <Dashboard />
    </TaskContextProvider>
  );
}

export default App;
