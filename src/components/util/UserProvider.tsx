import { UserContext } from "@/context/UserContext";
import { User, getAuth } from "firebase/auth";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null | "pending">("pending");

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const ProtectedRoutes = () => {
  const user = useContext(UserContext);

  if (user === "pending") return <div />;
  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};
