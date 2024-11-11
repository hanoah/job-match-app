import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001; // Use the PORT environment variable or default to 5000

// Use the API_URL as needed
console.log("API URL:", process.env.API_URL);

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors({
    origin: [
        'http://localhost:3000', // Local development
        'https://job-match-app.onrender.com', // Render production URL
        'https://job-match-hx5g.onrender.com' // Your frontend's deployed URL
    ]
}));
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();
});

app.get('/test', (req, res) => {
    console.log('Test endpoint hit, sending response');
    res.json({ message: "Hello from the backend!" });
});

app.post('/analyze_resume', async (req, res) => {
    const { resume } = req.body;

    if (!resume) {
        return res.status(400).json({ message: "Resume is required" });
    }

    try {
        // Extract the first three sentences from the resume
        const sentences = resume.split('.').slice(0, 3).join('.').trim();

        // Construct the prompt
        const prompt = `Based on the following information, identify the likely job type for this person. Respond with one sentence only, exactly like this format: “This person is probably going to be a nurse.” Do not add any extra details, explanations, or elaborations. \n\n${sentences}`;

        // Log the prompt to the console
        console.log("Prompt sent to OpenAI:", prompt);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // Ensure you have access to this model
            messages: [
                {
                    "role": "user",
                    "content": prompt // Use the constructed prompt here
                }
            ],
            max_tokens: 20,  // Set a low max_tokens to limit the response length
            temperature: 0.5 // Optional: Use lower temperature for more deterministic responses
        });

        const aiResponse = completion.choices[0].message.content;
        res.json({ message: aiResponse });
    } catch (error) {
        console.error("Error processing resume:", error);
        res.status(500).json({ message: "Failed to analyze resume" });
    }
});

app.post('/scrape_jobs', (req, res) => {
    console.log('Scrape jobs endpoint hit');
    const { urls, resume } = req.body;

    // Check if URLs and resume are present
    if (!urls || !resume) {
        console.error('Missing URLs or resume');
        return res.status(400).json({ message: "URLs and resume are required" });
    }

    console.log('Received URLs:', urls);
    console.log('Received Resume:', resume);
    
    // Send a success response
    res.json({ message: "Successfully received job URLs and resume" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


