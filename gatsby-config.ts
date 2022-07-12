import { SupabaseClient } from "@supabase/supabase-js";
import type { GatsbyConfig } from "gatsby";
// import { config as DotConfig } from "dotenv";

// DotConfig({
//   path: `.env.${process.env.NODE_ENV}`,
// });

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
    {
      resolve: "gatsby-source-supabase",
      options: {
        supabaseUrl: "https://tqodfyadkocrkvniakxp.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxb2RmeWFka29jcmt2bmlha3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4MzMwNTUsImV4cCI6MTk3MTQwOTA1NX0.k67wgyYXyu28YUu-cSErTJApvYnXocrdkbhu7lv-1kE",
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
