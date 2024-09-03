import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("we cant load cabin");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin can not be deleted");
  }
  return data;
}
