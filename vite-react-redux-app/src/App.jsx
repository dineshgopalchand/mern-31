import "./App.css";
import Contact from "./components/contact/Contact";
import { Dashboard } from "./components/dashboard/Dashboard";
import TaskContextProvider from "./context/TaskContextProvider";

function App() {
  return (
    <div className="main-container">
      <TaskContextProvider>
        <Dashboard />
        <Contact />
      </TaskContextProvider>
    </div>
  );
}

export default App;
