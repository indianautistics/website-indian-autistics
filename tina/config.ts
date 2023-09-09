import { defineConfig } from "tinacms";
import { normal_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "bd52740d-00c9-46a8-ae2e-d8cc1b4f0eea", // Get this from tina.io
  token: "190e965b2c2dc83cd97295667dd397a6dc6f4267", // Get this from tina.io
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
