# FormFree

## Overview
FormFree is a Spring Boot-based REST API project designed to simplify the process of collecting and managing form submissions for different projects. It allows users to create projects, generate API keys, and submit form data dynamically using those keys. All submissions are stored and can be retrieved for analysis or review.

## Features
- **Project Creation:** Easily create new projects and receive a unique API key and endpoint for form submissions.
- **Dynamic Form Submission:** Submit any form data (as JSON) to the project-specific endpoint using the API key.
- **Submission Retrieval:** Fetch all submissions for a given project by its ID.
- **Health Check Endpoint:** Basic endpoint to verify the service is running.

## How It Works
1. **Create a Project:**
   - Send a POST request to `/api/create-project` with a project name.
   - Receive a response containing the project name, API key, and submission endpoint.
2. **Submit a Form:**
   - Send a POST request to `/api/form/submit/{apiKey}` with your form data as JSON.
   - The data is validated and stored if the API key is correct.
3. **Retrieve Submissions:**
   - Send a GET request to `/api/form/result/{projectId}` to get all submissions for a project.

## Technologies Used
- Java 17+
- Spring Boot
- Maven
- Gson (for JSON serialization)

## Getting Started
1. Clone the repository.
2. Run `mvnw spring-boot:run` to start the application.
3. Use tools like Postman or curl to interact with the API endpoints.

## API Endpoints
- `POST /api/create-project` — Create a new project.
- `POST /api/form/submit/{apiKey}` — Submit form data to a project.
- `GET /api/form/result/{projectId}` — Retrieve all submissions for a project.
- `GET /api/health` — Health check endpoint.

## Folder Structure
- `src/main/java/com/form/free/formfree/controller` — REST controllers
- `src/main/java/com/form/free/formfree/service` — Business logic services
- `src/main/java/com/form/free/formfree/model` — Data models
- `src/main/java/com/form/free/formfree/repository` — Data repositories

## License
This project is for educational and demonstration purposes.