import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function AuthHOC() {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/login" />;
  return <Outlet />;
}
