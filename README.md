
# Task Management App
A full-stack task management application built with Svelte, Flowbite, Directus, and MySQL.

## Overview

This Task Management App allows users to create, manage, and track tasks. It features a Svelte frontend with Flowbite components for a responsive UI, and a Directus backend for efficient data management.

## Features

- User authentication
- Create, read, update, and delete tasks
- Responsive design using Flowbite components
- RESTful API powered by Directus

## Technologies Used

- Frontend: Svelte, Flowbite
- Backend: Directus
- Database: MySQL
- Build Tool: Vite

## Project Structure

A full-stack task management application built with Svelte, Flowbite, Directus, and MySQL.

## Overview

This Task Management App allows users to create, manage, and track tasks. It features a Svelte frontend with Flowbite components for a responsive UI, and a Directus backend for efficient data management.

## Features

- User authentication
- Create, read, update, and delete tasks
- Responsive design using Flowbite components
- RESTful API powered by Directus

## Technologies Used

- Frontend: Svelte, Flowbite
- Backend: Directus
- Database: MySQL
- Build Tool: Vite

## Project Structure

task-management-app/
├── Backend/
      directus/
│       └── ... (Directus configuration files)
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.svelte
│   │   │   ├── TaskList.svelte
│   │   │   └── TaskForm.svelte
│   │   ├── routes/
│   │   │   ├── Home.svelte
│   │   │   └── Tasks.svelte
│   │   ├── App.svelte
│   │   └── main.js
│   ├── package.json
│   └── vite.config.js
└── docker-compose.yml


### Prerequisites

- Node.js (v14 or later) There may be issue with version use docker for dependency error
- Docker and Docker Compose
- Git

### Directus Backend Setup

1. Clone the repository:
cd task-management-app/backend
2. Start the Directus and MySQL containers:
3. Access the Directus admin panel at `http://localhost:8055/admin` and set up your task collection.

### Svelte Frontend Setup

1. Navigate to the frontend directory:
    cd task/management-app/frontend
3.  Install dependencies:
   npm i
## Running the Application

1. Ensure the Directus backend is running:
   docker-compose up -d
2. Start the Svelte frontend development server:
   cd frontend
   npm run dev
3. Access the application at `http://localhost:5173`
   if port is busy use with another port
