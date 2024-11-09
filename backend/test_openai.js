import OpenAI from "openai";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Get __dirname equivalent in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

try {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "user", "content": "write a haiku about ai"}
        ]
    });
    
    // Log the response
    console.log("AI Response:", completion.choices[0].message.content);
} catch (error) {
    console.error("Error:", error);
}