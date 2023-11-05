/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    GOOGLE_CLIENT_ID:
      "382651915278-jk76g9e278vbe3dn6unnc43fmmbk7v36.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_CLIENT_ID: "76b7c0ddac9ddea2aea2",
    GITHUB_CLIENT_SECRET: "8a87fa6f999d867cb9d9f1372a768aaa8193f7f0",
  },
};

module.exports = nextConfig;
