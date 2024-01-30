import { createContext, useState } from "react";
import { Token } from "../types/Token";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {}
});

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = JSON.parse(localStorage.getItem("token") || "{}") as Token;
  if (token.accessToken && token.expiresAt.getTime() > Date.now()) {
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
