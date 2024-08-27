import { supabase } from "./supabase";

export async function AddUser(user_data) {
  const { data, error } = await supabase
    .from("USERS")
    .insert([user_data])
    .select();

  if (error) {
    console.error("Error adding user:", error.message);
    throw new Error(error.message);
  }

  return data;
}
