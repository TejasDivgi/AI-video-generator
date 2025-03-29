/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect:'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_CdnpWfUIx58B@ep-red-sky-a5nzkyov-pooler.us-east-2.aws.neon.tech/AI-video-generator?sslmode=require',
  },
};