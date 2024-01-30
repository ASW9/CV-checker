import { gptRequest } from "@/utils/ai";
import { NextResponse } from "next/server";

export async function POST(req) {
    const cvText = await req.json()
    console.log("Request: ", cvText)

    const cvFeedback = await gptRequest([{"role": "user", "content": `Please read this CV: ${cvText}. and critique it to make it more concise, more impressive and faster for a reader to extract key skills and achievements from.`}])
    .catch((error) => {return NextResponse.json({error: "API request failed"}, {status: 500})})
    console.log(cvFeedback)

    return NextResponse.json(cvFeedback, {status: 200})
}   