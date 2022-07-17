import { SupabaseClient } from "@supabase/supabase-js";
import type { GatsbyConfig } from "gatsby";
import { config as DotConfig } from "dotenv";

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
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true, // Enable tailwindcss support
        ignore: ["/ignored.css", "prismjs/", "docsearch.js/"], // Ignore files/folders
        purgeOnly: ["components/", "/main.css", "bootstrap/"], // Purge only these files/folders
        purgeCSSOptions: {},
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
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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
