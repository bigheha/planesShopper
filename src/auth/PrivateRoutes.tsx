import { Outlet, Navigate } from "react-router-dom";
import useUser from "./useUser";

function PrivateRoutes() {
  const user = true; //change for const user = useUser() later;
  return user ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default PrivateRoutes;
