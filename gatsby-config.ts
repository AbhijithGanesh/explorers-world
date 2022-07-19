import { SupabaseClient } from "@supabase/supabase-js";
import type { GatsbyConfig } from "gatsby";
import { config as DotConfig } from "dotenv";
import { env } from "process";

DotConfig({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Explorer's World`,
    siteUrl: `https://explorer-world.vercel.app/`,
    description:
      "Contributor's gateway to contributing to challenges with the community.",
    twitterHandle: "@dokcommunity",
    linkedinHandle: "data-on-kubernetes-community",
    youtubeChannel: "https://www.youtube.com/c/DoKcommunity",
    baseUrl: "/",
  },
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        crossOrigin: `use-credentials`,
        display: "standalone",
        start_url: "/",
        name: "Explorer's World",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-vercel-deploy",
    {
      resolve: "gatsby-source-supabase",
      options: {
        supabaseUrl: "https://tqodfyadkocrkvniakxp.supabase.co",
        supabaseKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        types: [
          {
            type: "User",
            query: (client: SupabaseClient) => client.from("Users").select("*"),
          },
          {
            type: "Challenges",
            query: (client: SupabaseClient) =>
              client.from("Challenges").select("*"),
          },
          {
            type: "ContriLog",
            query: (client: SupabaseClient) =>
              client.from("ContriLog").select("*"),
          },
          {
            type: "Contributions",
            query: (client: SupabaseClient) =>
              client.from("Contribution").select("*"),
          },
        ],
      },
    },
  ],
};

export default config;
