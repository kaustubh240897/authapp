/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    GOOGLE_CLIENT_ID:
      "100521142658-epbpqe0is3pthk5m54s4o2ol6kapdt3j.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_CLIENT_ID: "fe70cde2c8ed21c6e1e2",
    GITHUB_CLIENT_SECRET: "e648a47dfc09402a8b0ccc8afd7909ac2547768c",
    NEXTAUTH_SECRET : "0540567099b67862c156c9584385c752d552f156f2f127ff6449759abee04932"
  },
};

module.exports = nextConfig;
