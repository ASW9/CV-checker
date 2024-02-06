import { gptRequest } from "@/utils/ai";
import { NextResponse } from "next/server";

export async function POST(req) {
    const cvText = await req.json()
    console.log("Request: ", cvText)

    

    //console.log(testCvText)

    const cvFeedback = await gptRequest([{"role": "user", "content": `Provide detailed feedback on this CV: ${cvText}. Ignore formatting, consider the structure of the CV, the clarity of information, the structure of how `}])
    .catch((error) => {return NextResponse.json({error: "API request failed"}, {status: 500})})

    console.log(cvFeedback)

    return NextResponse.json(cvFeedback, {status: 200})
}