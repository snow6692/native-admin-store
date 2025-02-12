import { ADMIN } from "@/constants/constants";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  if (user) {
    const { error, data } = await (await supabase)
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error || !data) {
      console.log("Error fetching data " + error);
      return;
    }
    if (data.type !== ADMIN) return redirect("/");
  }
  return <div>{children}</div>;
}

export default AdminLayout;
