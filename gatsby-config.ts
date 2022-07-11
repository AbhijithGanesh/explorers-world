import { SupabaseClient } from "@supabase/supabase-js";
import type { GatsbyConfig } from "gatsby";
import { config as DotConfig } from "dotenv";

DotConfig({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `explorer-world`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-supabase",
      options: {
        supabaseUrl: process.env?.NEXT_PUBLIC_SUPABASE_URL!,
        supabaseKey: process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        types: [
          {
            type: "User",
            query: (client: SupabaseClient) => client.from("Users").select("*"),
          },
        ],
      },
    },
  ],
};

export default config;
