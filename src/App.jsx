import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import TaskAllocation from "./pages/Tasks/TaskAllocationPage";
import BotStatus from "./pages/Bots/BotStatusPage";
import TaskTab from "./components/Task/TaskTab";
import AnalyticsPage from "./pages/Analyticspage";
import { AuthProvider } from "./context/AuthContext";
import { BotProvider } from "./context/BotContext";
import { TaskProvider } from "./context/TaskContext";
import PrivateRoute from "./components/PrivateRoute";
import TaskQueue from "./pages/Tasks/TaskQueue";

function App() {
  return (
    <AuthProvider>
      <BotProvider>
        <TaskProvider>
          <Router>

            <Header />

            <Routes>

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/tasks"
                element={
                  <PrivateRoute>
                    <TaskAllocation />
                  </PrivateRoute>
                }
              />

              <Route
                path="/bots"
                element={
                  <PrivateRoute>
                    <BotStatus />
                  </PrivateRoute>
                }
              />

              <Route
                path="/taskqueue"
                element={
                  <PrivateRoute>
                    <TaskQueue />
                  </PrivateRoute>
                }
              />

              <Route
                path="/analytics"
                element={
                  <PrivateRoute>
                    <AnalyticsPage />
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<Login />} />

            </Routes>

            <Footer />

          </Router>
        </TaskProvider>
      </BotProvider>
    </AuthProvider>
  );
}

export default App;