import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  events: {
    async signIn(msg) {
      console.log("msg", msg);
      localStorage.setItem("userData", msg);
    },
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("x->new user property", isNewUser);
      // if (account.isNewUser) {
      //   // This user is signing in for the first time
      //   // You can perform any actions specific to new users here
      // }
      return token; // Allow sign-in
    },
  },
};

export default NextAuth(authOptions);
