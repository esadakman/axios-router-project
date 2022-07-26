import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userSession = JSON.parse(sessionStorage.getItem("userInfo"));
  const userLocal = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userLocal);
  // const user = true;

  return userSession || userLocal ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
