import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string | undefined =
  "https://tqodfyadkocrkvniakxp.supabase.co";
const supabaseAnonKey: string | undefined =
`${JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)}`;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
