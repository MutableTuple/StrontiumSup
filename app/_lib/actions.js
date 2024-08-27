"use server"; // This is for defining server components and server actions

import { AddUser } from "./data-service";

export async function singUpUser(formData) {
  try {
    const email = formData.get("email_input");
    await AddUser({ email });

    if (user) {
      console.log("User signed up successfully:", user);
      return user;
    }
  } catch (error) {
    console.error("Error signing up user:", error.message);
  }
}
