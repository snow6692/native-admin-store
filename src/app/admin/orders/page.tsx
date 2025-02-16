import { getOrdersWithProducts } from "@/actions/orders";
import React from "react";
import PageComponent from "./page-component";

async function Orders() {
  const ordersWithProducts = await getOrdersWithProducts();

  if (!ordersWithProducts)
    return (
      <div className="text-center font-bold text-2xl">No orders Found </div>
    );

  return <PageComponent ordersWithProducts={ordersWithProducts} />;
}

export default Orders;
