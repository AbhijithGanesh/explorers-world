import { supabase } from "../utils/supabase";

let sign_up_wrapper = async (email: string, password: string) => {
  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { user, session, error };
};

let sign_in_wrapper = async (email: string, password?: string) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  return { user, session, error };
};

let check_login = () => {
  if (supabase.auth.user()) {
    return true;
  } else {
    return false;
  }
};

export { sign_up_wrapper, sign_in_wrapper, check_login };
