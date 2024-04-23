import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import auth from "../../../lib/auth"

export const GET=async()=>{
    const session =await getServerSession(auth)
    console.log(session,'server')
    if(!session) return NextResponse.json({
        message:"You are not logged in",
        status:403,
    })

    return NextResponse.json({user:session})
}