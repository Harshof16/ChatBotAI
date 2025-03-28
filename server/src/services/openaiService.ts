import Groq from 'groq-sdk';
import dotenv from 'dotenv';

// const GROQ_API_KEY = '';
dotenv.config();
console.log('process.env.GROQ_API_KEY', process.env.GROQ_API_KEY);
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getAIResponse = async (message: string): Promise<string> => {
    try {
        // const response = await axios.post(
        //     GROQ_API_URL,
        //     {
        //         model: "mixtral-8x7b-32768", // Use an available model
        //         messages: [{ role: "user", content: message }],
        //         temperature: 0.7,
        //         max_tokens: 500
        //       },
        //     {
        //         headers: {
        //             Authorization: `Bearer ${GROQ_API_KEY}`,
        //             // "Accept": "application/json",
        //             "Content-Type": "application/json"
        //         }
        //     });
        const response = await groq.chat.completions.create({
            messages: [
              {
                role: "user",
                content: message,
              },
            ],
            model: "llama-3.3-70b-versatile",
          });
            // console.log('response', response);
        return response.choices[0].message?.content?.toString() || "I couldn't understand that.";
    } catch (error:any) {
        console.error("OpenAI Error:", error);
        return error?.message || "Error processing your request.";
    }
};


