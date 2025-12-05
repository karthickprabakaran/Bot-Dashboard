import { createContext, useContext, useState } from "react";

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

  const [currentUser, setCurrentUser] = useState(null);
 // signup function
  const signup = async (email, password, name) => {
  return new Promise((resolve, reject) => {
    const exists = users.find((u) => u.email === email);

    if (exists) {
      reject("User already exists");
    } else {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
      }; 
      
      
      setUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      console.log("the current user" + newUser);

      resolve(newUser);
    }
  });
};
   // login mock function 
   // TODO: create an actual api and connect with the supabase
  const loginUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        reject("Invalid email or password");
      } else {
        setCurrentUser(user);
        console.log("The login is successfull ");
        
        resolve(user);
      }
    });
  };

  const logout = () => {
    setCurrentUser(null);
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