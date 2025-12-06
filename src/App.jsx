import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BotProvider } from "./context/BotContext";
import { TaskProvider } from "./context/TaskContext";
import BotStatus from "./pages/Bots/BotStatusPage";
import TaskAllocation from "./pages/Tasks/TaskAllocationPage";
import TaskQueue from "./pages/Tasks/TaskQueuePage";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
    <AuthProvider>
      <BotProvider>
        <TaskProvider>
        <Header />
        <Login/>
        <BotStatus/>
        <TaskAllocation />
        <TaskQueue />
        <Dashboard />
        </TaskProvider>
      </BotProvider>
    </AuthProvider>
    </>
  );
}

export default App;
