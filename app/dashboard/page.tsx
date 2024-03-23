import React, { CSSProperties } from "react";
import DashMenuItems from "../components/DashMenuItems";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="text-2xl font-bold">Dashboard</div>

      <div className="my-4 font-medium">Menu Items</div>

      <DashMenuItems />
    </div>
  );
};

export default Dashboard;
