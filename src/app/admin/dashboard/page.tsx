import React from "react";
import DashboardComponent from "./page-component";
import { getMonthlyOrders } from "@/actions/orders";

async function Dashboard() {
  const monthlyOrders = await getMonthlyOrders();
  console.log(monthlyOrders);
  return <DashboardComponent monthlyOrders={monthlyOrders} />;
}

export default Dashboard;
