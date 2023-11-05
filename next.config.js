/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    GOOGLE_CLIENT_ID:
      "100521142658-epbpqe0is3pthk5m54s4o2ol6kapdt3j.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_CLIENT_ID: "76b7c0ddac9ddea2aea2",
    GITHUB_CLIENT_SECRET: "8a87fa6f999d867cb9d9f1372a768aaa8193f7f0",
    NEXTAUTH_SECRET : "0540567099b67862c156c9584385c752d552f156f2f127ff6449759abee04932"
  },
};

module.exports = nextConfig;
