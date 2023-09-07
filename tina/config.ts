import { defineConfig } from "tinacms";
import { normal_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d3beee7d-620a-403e-9066-3a980060f936", // Get this from tina.io
  token: "0766d1aa462c3f4a49b0a4c6a122f76cb644b07a", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [],
  },
});
