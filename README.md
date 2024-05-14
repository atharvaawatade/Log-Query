# Log Query

This project provides a user-friendly interface for querying logs stored in log files. It allows users to search for logs based on various criteria such as log level, log message, and timestamp.

## How to Run Locally

### Prerequisites
- Python 3.x installed on your system.

### Step 1: Clone the Repository
1. Download or clone the repository to your local machine.

    ```
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```
    cd log-query
    ```

### Step 2: Create and Activate Virtual Environment
1. Create a virtual environment using `venv`:

    ```
    python -m venv venv
    ```

2. Activate the virtual environment:
   
    - On Windows:
        ```
        venv\Scripts\activate
        ```

    - On macOS and Linux:
        ```
        source venv/bin/activate
        ```

### Step 3: Install Dependencies
1. Install the required dependencies using `pip`:

    ```
    pip install -r requirements.txt
    ```

### Step 4: Run the Flask Application
1. Run the Flask application:

    ```
    python app.py
    ```

### Step 5: Access the Application
1. Open your web browser and go to [http://localhost:5000](http://localhost:5000) to access the application.

## System Design

The system consists of a Flask web application that serves as the frontend interface for querying logs. When a user submits a search query, the application sends a request to the server, which then processes the query and retrieves logs based on the specified criteria. The retrieved logs are displayed to the user in a user-friendly format.

## Identified Issues

- Currently, the project uses dummy log data for demonstration purposes. In a real-world scenario, the system would need to integrate with actual log files or a log database.

