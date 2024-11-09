# Job Match Analyzer

## Overview

The Job Match Analyzer is a web application that allows users to input job URLs and their resumes. The application sends the resume to an AI model for analysis, which returns a suggested job type based on the content of the resume. This project utilizes React for the frontend and Express.js for the backend, integrating with the OpenAI API for natural language processing.

## Features

- Input for job URLs (currently not connected to any functionality).
- Text area for pasting resumes.
- AI analysis of the resume to suggest a likely job type.
- Loading spinner on the submit button to indicate processing.

## Technologies Used

- **Frontend**: React
- **Backend**: Express.js
- **Database**: None (currently)
- **API**: OpenAI API
- **Styling**: Bootstrap (optional)

## Setup Instructions

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- An OpenAI API key

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/job-match-analyzer.git
   cd job-match-analyzer
   ```

2. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

3. **Install backend dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the `backend` directory and add your OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your-openai-api-key
   ```

5. **Navigate to the frontend directory**:

   ```bash
   cd ../src
   ```

6. **Install frontend dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the backend server**:

   ```bash
   cd backend
   node server.js
   ```

   The server will run on `http://localhost:5001`.

2. **Start the frontend application**:

   Open a new terminal window, navigate to the frontend directory, and run:

   ```bash
   cd src
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Paste job URLs into the "Job URLs" text area (currently not connected to any functionality).
3. Paste your resume into the "Resume" text area.
4. Click the "Submit" button to analyze the resume.
5. The AI's response will be displayed below the button.

### Logging

The backend logs all incoming requests and the prompts sent to the OpenAI API. You can view these logs in the terminal where the backend server is running.

### Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://openai.com/) for providing the API for natural language processing.
- [React](https://reactjs.org/) for building the user interface.
- [Express.js](https://expressjs.com/) for creating the backend server.
