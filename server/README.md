# Todo API by using PostgresSQL and Node.js

This is a simple Todo API built with Node.js, Express, and PostgreSQL.

## Getting Started

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- PostgreSQL: [Download and Install PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repo Url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <server>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the PostgreSQL database:

   - Create a new database.
   - Update the database connection details in the `database.js` file.

5. Set up the PostgreSQL URL :

   - you need to specify your postgresSql url

- #.env file consists

  ```bash
  PORT = 5000
  POSTGRES_URL= <your postgresSQL url>
  ```

  - [reference](https://youtu.be/rjOKuGabFiQ?si=DQ20gB4GxGONDnD4)

6. Run the application:

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:5000`.

## Postman Collection:

```bash
https://www.postman.com/restless-moon-118890/workspace/my-workspace/collection/28834131-97f5a5b5-8b63-4ef4-a265-905874c23163?action=share&creator=28834131
```

## API Endpoints

### Add Todo

- **URL:** `/todos/add-todo/`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "description": "Example Todo",
    "completed":false(default value)
  }
  ```
- **Response:**
  ```json
  {
    "message": "your Todo added successfully!"
  }
  ```

### Get All Todos

- **URL:** `/todos/`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "data": [
      {
        "todo_id": 1,
        "description": "Example Todo",
        "completed": false,
        "dateofcreated": "2024-01-09T12:00:00.000Z"
      },
      .......
    ]
  }
  ```

### Get Todo by ID

- **URL:** `/todos/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "data": [
      {
        "todo_id": 1,
        "description": "Example Todo",
        "completed": false,
        "dateofcreated": "2024-01-09T12:00:00.000Z"
      }
    ]
  }
  ```

### Update Todo by ID

- **URL:** `/todos/update-todo/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "description": "Updated Todo",
    "completed": true
  }
  ```
- **Response:**
  ```json
  {
    "msg": "OK",
    "data": [
      {
        "todo_id": 1,
        "description": "Updated Todo",
        "completed": true,
        "dateofcreated": "2024-01-09T12:00:00.000Z"
      }
    ]
  }
  ```

### Delete Todo by ID

- **URL:** `/todos/delete-todo/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "msg": "OK",
    "data": [
      {
        "todo_id": 1,
        "description": "Updated Todo",
        "completed": false,
        "dateofcreated": "2024-01-09T12:00:00.000Z"
      }
    ]
  }
  ```

```

Customize the endpoints, descriptions, and examples based on your specific API routes and responses. Include any additional information that might be useful for users and contributors.
```
