import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobURLInput() {
    const [urls, setUrls] = useState("");
    const [resume, setResume] = useState("");
    const [backendMessage, setBackendMessage] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    // Test backend connection on component mount
    useEffect(() => {
        console.log('Component mounted, attempting to fetch...');
        fetch('http://localhost:5001/test')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                // You can choose to log the message or handle it differently
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setBackendMessage('Error connecting to backend');
            });
    }, []);

    // Handle form submission to backend
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5001/analyze_resume', {
                resume: resume
            });
            setAiResponse(response.data.message);
            setBackendMessage("");
        } catch (error) {
            console.error("Error connecting to backend:", error);
            setBackendMessage("Failed to connect");
            setAiResponse("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Job Match Analyzer</h3>

            {/* Commented out the backend connection message alert */}
            {/* <div className="alert alert-info">
                Backend Connection: {testMessage}
            </div> */}

            <div className="mb-3">
                <label htmlFor="urls" className="form-label">Job URLs (one per line)</label>
                <textarea
                    id="urls"
                    className="form-control"
                    rows="4"
                    placeholder="Paste job URLs here, one per line"
                    value={urls}
                    onChange={(e) => setUrls(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="resume" className="form-label">Resume</label>
                <textarea
                    id="resume"
                    className="form-control"
                    rows="6"
                    placeholder="Paste your resume here"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                    "Submit"
                )}
            </button>

            <div className="mt-4">
                <h5>AI Response:</h5>
                <div className="alert alert-secondary">
                    {aiResponse || "No response yet."}
                </div>
            </div>
        </div>
    );
}

export default JobURLInput;
