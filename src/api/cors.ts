import Cors from "cors";
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { supabase } from "../utils/supabase";

const cors = Cors();

let corsHandler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  await new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        reject(result);
      }

      resolve(result);
    });
  });
  res.json(supabase.auth.api.headers.Authorization);
};

export default corsHandler;
