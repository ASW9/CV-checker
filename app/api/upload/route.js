import { gptRequest } from "@/utils/ai";

export async function POST(req) {
    const body = await req.json()

    // What information do we need to get? -> a file, that is converted into text?

    let cvText = ''

    try {
        cvFeedback = await gptRequest([{"role": "user", "content": `In one sentence, describe an image of this thing that could be given to an AI image generator: ${systemMessage}. No background.`}])
    }
}