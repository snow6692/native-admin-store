"use server";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";

export const getOrdersWithProducts = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("order")
    .select("*, order_items:order_item(*, product(*)), user(*)")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

export const updateOrderStatus = async (orderId: number, status: string) => {
  const supabase = await createClient();
  const { error } = await supabase
    .from("order")
    .update({ status })
    .eq("id", orderId);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/orders");
};
