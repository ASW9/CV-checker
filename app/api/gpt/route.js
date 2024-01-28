import { gptRequest } from "@/utils/ai";
import { NextResponse } from "next/server";

export async function POST(req) {
    const cvText = await req.json()
    console.log("Request: ", cvText)

    const cvFeedback = await gptRequest([{"role": "user", "content": `In less than 3 sentences, provide feedback on this CV: ${cvText}. Ignore formatting, consider the structure of the CV, the clarity of information, the structure of how `}])
    .catch((error) => {return NextResponse.json({error: "API request failed"}, {status: 500})})

    return NextResponse.json(cvFeedback, {status: 200})
}