import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BotProvider } from "./context/BotContext";
import BotStatus from "./pages/BotStatusPage";

function App() {

  return (
    <>
    <AuthProvider>
      <BotProvider>
        <Header />
        <Login/>
        <BotStatus/>
      </BotProvider>
    </AuthProvider>
    </>
  );
}

export default App;
