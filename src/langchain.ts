import OpenAI from "openai";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: process.env.OPENAI_API_KEY,
});


export default async function getAnswerFromOpenAi( ques: string ) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: ques,
                },
            ],
        });
    
        const response = completion.choices[0].message;
        console.log(response);
    
        return response;
    } catch (error) {
        console.error("An error occurred:", error);
        return "An error occurred: " + error;
    }
}


