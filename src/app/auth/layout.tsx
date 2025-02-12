import { ADMIN, USER } from "@/constants/constants";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AuthLayout({ children }: { children: ReactNode }) {
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
    if (data.type === USER) return redirect("/");
    if (data.type === ADMIN) return redirect("/admin");
  }

  return <div>{children}</div>;
}

export default AuthLayout;
