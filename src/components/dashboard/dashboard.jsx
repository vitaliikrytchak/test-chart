import Logout from "../logout/logout";
import Chart from "../chart/chart";
import { useSelector } from "react-redux";

import "./dashboard.scss";

const Dashboard = () => {
  const user = useSelector((state) => state.user.username);
  return (
    <div className="dashboard">
      <h1>{user}</h1>
      <Chart />
      <Logout />
    </div>
  );
};

export default Dashboard;
