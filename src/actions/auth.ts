"use server";
import { createClient } from "@/supabase/server";
export async function authenticate(email: string, password: string) {
  const supabase = createClient();
  try {
    const { error } = await (
      await supabase
    ).auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  } catch (error) {
    console.log("AUTHENTICATION ERROR", error);
    throw error;
  }
}
