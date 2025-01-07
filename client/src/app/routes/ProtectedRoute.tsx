import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router";

type ProtectedRouteProps = {
  isAllowed: boolean | null;
  redirectPath?: string;
  children?: ReactNode;
};
const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/",
  children,
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
