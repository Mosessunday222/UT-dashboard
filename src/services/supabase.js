import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vcapxucnryygpzfenivm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjYXB4dWNucnl5Z3B6ZmVuaXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzMjM1ODQsImV4cCI6MjA0MDg5OTU4NH0.LSml_deQA3efuXOFrX6o_bH4Td8LY1pmOOVUdN32aC4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
