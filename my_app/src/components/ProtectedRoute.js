import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const navigate = useNavigate();
  const currentUser = JSON.parse(window.localStorage.getItem("isLoggedIn"));
  console.log(currentUser);

  useEffect(() => {
    if (!currentUser || currentUser.role !== "admin") {
      setShowDashboard(true);
      navigate("/");
    }
  }, [currentUser]);

  return <>{showDashboard ? <Component /> : null}</>;
};

export default ProtectedRoute;
