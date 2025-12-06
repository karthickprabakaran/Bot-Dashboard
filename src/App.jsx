import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BotProvider } from "./context/BotContext";
import { TaskProvider } from "./context/TaskContext";
import BotStatus from "./pages/BotStatusPage";
import TaskAllocation from "./pages/TaskAllocationPage";
import TaskQueue from "./pages/TaskQueuePage";

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
        </TaskProvider>
      </BotProvider>
    </AuthProvider>
    </>
  );
}

export default App;
