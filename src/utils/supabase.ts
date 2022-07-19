import { createClient } from "@supabase/supabase-js";
import { config as DotConfig } from "dotenv";

DotConfig({
  path: `../../.env.${process.env.NODE_ENV}`,
});

const supabaseUrl: string = "https://tqodfyadkocrkvniakxp.supabase.co";
const supabaseAnonKey: string | undefined =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
