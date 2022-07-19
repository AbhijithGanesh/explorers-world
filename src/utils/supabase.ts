import { createClient } from "@supabase/supabase-js";
import { env } from "process";

const supabaseUrl: string = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: string | undefined = env.PRODUCTION_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!);
