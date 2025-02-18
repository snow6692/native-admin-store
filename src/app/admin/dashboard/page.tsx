import React from "react";
import DashboardComponent from "./page-component";
import { getMonthlyOrders } from "@/actions/orders";
import { getCategoryData } from "@/actions/categories";
import { getLatestUsers } from "@/actions/auth";

async function Dashboard() {
  const monthlyOrders = await getMonthlyOrders();
  const categoryData = await getCategoryData();
  const latestUsers = await getLatestUsers();

  return (
    <DashboardComponent
      monthlyOrders={monthlyOrders}
      categoryData={categoryData}
      latestUsers={latestUsers}
    />
  );
}

export default Dashboard;
