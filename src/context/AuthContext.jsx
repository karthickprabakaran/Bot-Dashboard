import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Karthick",
      email: "test@gmail.com",
      password: "test",
    },
  ]);

  // this is to avoid the redirection during the refresh 
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userCookie = Cookies.get("authUser");
    if (userCookie) {
      setCurrentUser(JSON.parse(userCookie));
    }
    setLoading(false);
  }, []);

  const signup = async (email, password, name) => {
    return new Promise((resolve, reject) => {
      const exists = users.find((u) => u.email === email);

      if (exists) return reject("User already exists");

      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
      };

      setUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);

      Cookies.set("authUser", JSON.stringify(newUser), { expires: 1 });

      resolve(newUser);
    });
  };

  const loginUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) return reject("Invalid email or password");

      setCurrentUser(user);

      Cookies.set("authUser", JSON.stringify(user), { expires: 1 });

      resolve(user);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    Cookies.remove("authUser");
  };

  const isLoggedIn = currentUser !== null;

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        signup,
        loginUser,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);