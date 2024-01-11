# Full-Stack App with PostgreSQL, Node.js, and React

This is a simple full-stack application that uses PostgreSQL as the database, Node.js with a connection pool for the backend server, and React for the frontend.

## sample
## demo url : https://todos-app-postgressql.onrender.com/

![1](<client/public/imgs/Screenshot (953).png>)

![2](<client/public/imgs/Screenshot (954).png>)

![3](<client/public/imgs/Screenshot (955).png>)

![4](<client/public/imgs/Screenshot (956).png>)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running

### Backend Setup

1. Navigate to the `server` directory.

   ```bash
   cd server
   ```

2. Install backend dependencies.

   ```bash
   npm install
   ```

3. Set up the PostgreSQL database. Update the `config.js` file with your database credentials.

   ```javascript
   // server/db/database.js
   const { Pool } = require("pg");

   const pool = new Pool({
     connectionString: process.env.YOUR_POSTGRES_URL + "?sslmode=require",
   });

   module.exports = pool;
   ```

4. Run the backend server.

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory.

   ```bash
   cd client
   ```

2. Install frontend dependencies.

   ```bash
   npm install
   ```

3. Run the React app.

   ```bash
   npm start
   ```

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the React app.

2. Interact with the app to perform CRUD operations on the PostgreSQL database using the connection pool.

## Folder Structure

```
.
├── client          # Frontend React App
│   ├── public
│   └── src
└── server          # Backend Node.js Server
    ├── db   # PostgreSQL connection pool configuration
    └── routes
    ___controller      # Backend API routes
```

## Contributing

Feel free to contribute to this project. Fork it and submit a pull request!
