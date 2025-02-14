import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ADMIN } from "@/constants/constants";
import { RenderMounted } from "@/providers/render-mounted";
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
  return (
    <>
      <RenderMounted>
        <Header />
        <main className="min-h-[calc(100svh-128px)] py-3">{children}</main>
        <Footer />
      </RenderMounted>
    </>
  );
}

export default AdminLayout;
