const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
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
