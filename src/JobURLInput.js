import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobURLInput() {
    const [urls, setUrls] = useState("");
    const [resume, setResume] = useState("");
    const [backendMessage, setBackendMessage] = useState("");
    const [testMessage, setTestMessage] = useState("");

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
                setTestMessage(data.message);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setTestMessage('Error connecting to backend');
            });
    }, []);

    // Handle form submission to backend
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5001/scrape_jobs', {
                urls: urls.split('\n'),
                resume: resume
            });
            setBackendMessage(response.data.message);
        } catch (error) {
            console.error("Error connecting to backend:", error);
            setBackendMessage("Failed to connect");
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Job Match Analyzer</h3>
            
            {/* Display test connection message */}
            <div className="alert alert-info">
                Backend Connection: {testMessage}
            </div>

            <div className="mb-3">
                <label htmlFor="jobUrls" className="form-label">Job URLs (one per line)</label>
                <textarea
                    id="jobUrls"
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

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default JobURLInput;
