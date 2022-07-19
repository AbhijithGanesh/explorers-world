import { createClient } from "@supabase/supabase-js";
import { config as DotConfig } from "dotenv";
import { env } from "process";

const supabaseUrl: string = "https://tqodfyadkocrkvniakxp.supabase.co";
const supabaseAnonKey: string | undefined = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
