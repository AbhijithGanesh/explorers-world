import { createClient } from "@supabase/supabase-js";
import { env } from "process";

const supabaseUrl: string = "https://tqodfyadkocrkvniakxp.supabase.co";
const supabaseAnonKey: string | undefined = env.PRODUCTION_KEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
