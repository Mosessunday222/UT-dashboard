import supabase from "./supabase";


export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.errror(error);
    throw new Error("we cant load cabin");
  }
  return data
}
