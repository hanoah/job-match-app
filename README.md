# Job Match Analyzer

## Overview

The Job Match Analyzer is a web application that leverages OpenAI's API to analyze resumes and match them with job descriptions. It allows users to input their resumes and job URLs, and provides insights on the likely job type based on the resume content.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **OpenAI API**: For analyzing resumes
- **CORS**: To handle cross-origin requests
- **Axios**: For making HTTP requests from the frontend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- An OpenAI API key (sign up at [OpenAI](https://openai.com/) if you don't have one)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/job-match-app.git
   cd job-match-app
   ```

2. **Install dependencies for the backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` directory and add your OpenAI API key:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Install dependencies for the frontend**:
   ```bash
   cd ../src
   npm install
   ```

### Running the Application

1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5001`.

2. **Start the frontend application**:
   Open a new terminal window and run:
   ```bash
   cd src
   npm start
   ```

   The frontend application will run on `http://localhost:3000`.

### Usage

- **Test the Backend**: Navigate to `http://localhost:5001/test` in your browser to check if the backend is running correctly. You should see a JSON response: `{ message: "Hello from the backend!" }`.

- **Analyze Resume**:
  1. Enter job URLs (one per line) in the "Job URLs" textarea.
  2. Paste your resume in the "Resume" textarea.
  3. Click the "Submit" button to send the resume to the backend for analysis.
  4. The AI response will be displayed below the form.

### API Endpoints

- **GET /test**: A simple endpoint to test the backend connection.
- **POST /analyze_resume**: Analyzes the provided resume and returns a likely job type.
- **POST /scrape_jobs**: Accepts job URLs and a resume for further processing (currently logs the input).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
