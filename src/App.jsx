import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <>
    <AuthProvider>
      <Header />
      <Login/>
      <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
