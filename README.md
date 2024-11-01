# To-Do List Application

A simple To-Do List application built with React and Node.js. This application allows users to manage their tasks efficiently.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Responsive design

## Technology Stack

- **Front-end:** React, HTML, CSS
- **Back-end:** Node.js, Express
- **Database:** JSON file (tasks.json) for simple storage (or specify your chosen database)
- **State Management:** [Redux/Context API, if used]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KumarP123IT/OctaNet_TodoList.git
   ```
2. Navigate to the project directory:

   ```bash
   cd OctaNet_TodoList
   ```

3. Install dependencies for the client:

   ```bash
      cd client
      npm install
   ```

4. If using a server, navigate to the server directory and install dependencies:

   ```bash
      cd ../server
      npm install
   ```

## Usage

1. Start the server:

   ```bash
      node server.js
   ```

2. Start the React application:

   ```bash
      cd client
      npm start
   ```

3. Open your browser and go to http://localhost:3000 to view the application.


## API Endpoints

 - GET /api/tasks - Retrieve all tasks
 - POST /api/tasks - Add a new task
 - PUT /api/tasks/:id - Edit an existing task
 - DELETE /api/tasks/:id - Delete a task

## Contributing

  If you would like to contribute to this project, please fork the repository and create a pull request.

## Author 

  Kumar P B.Tech Information technology
