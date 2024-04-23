import NextAuth from "next-auth/next"
import authConfig from "../../../../lib/auth"

export const GET = NextAuth(authConfig)
export const POST = NextAuth(authConfig)