import { Outlet, Navigate } from "react-router-dom";
import useUser from "./useUser";

function PrivateRoutes() {
  const user = useUser();
  return user ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default PrivateRoutes;
