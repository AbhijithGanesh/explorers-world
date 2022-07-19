import { createClient } from "@supabase/supabase-js";
import { env } from "process";

const supabaseUrl: string = "https://tqodfyadkocrkvniakxp.supabase.co";
const supabaseKey: string | undefined = env.PRODUCTION_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!);
