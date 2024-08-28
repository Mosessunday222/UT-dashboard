import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mosszfskkuotgqskzbsv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vc3N6ZnNra3VvdGdxc2t6YnN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MjIyMjAsImV4cCI6MjA0MDI5ODIyMH0.JHtIKEay2-vpSv4H_21qUWUDFScqxUh7Sz5TGh5JLWQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
