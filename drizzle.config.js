import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url:'postgresql://pro1_owner:Cpo0Jiel3xRu@ep-plain-credit-a8pa748h.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require'
  }
});
