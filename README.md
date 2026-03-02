# Express.js Boilerplate Project

A clean and organized Express.js project structure following best practices for scalability and maintainability.

## Table of Contents

- [Setting up Express in NodeJS environment](#setting-up-express-in-nodejs-environment)
  - [Dotenv for storing environmental variables](#dotenv-for-storing-environmental-variables)
- [MongoDB setup for NodeJS](#mongodb-setup-for-nodejs)
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
  - [File Descriptions](#file-descriptions)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Architecture Pattern](#architecture-pattern)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Best Practices](#best-practices)

---

## Setting up Express in NodeJS environment

- Open `index.js`
- Check for `console.log("Hello World ! 👍")` by running the command `node index.js`
- Just run `npm init -y` to install `package.json`
- Type on Command Line - `npm i express` to install express
- Copy the Below Code on the `index.js`:

```javascript
//start of code

import express from "express";
const app = express();

const PORT = 4000;

app.get("/", (request, response) => {
  response.send({ message: "Welcome to Home Page" });
});

app.listen(PORT, () =>
  console.log(`The Server is running on the port : ${PORT} 😉`),
);

//end of code
```

- Type `npm install --save-dev nodemon` to install as a dev dependency
- Inside the `package.json`, make the following changes:

```javascript
{
  "type": "module", // to support latest import & export syntax
  "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
  }
}
```

- Now run `npm run dev` on the Command Line to show the output
- Below output should be visible on Command Line:

```bash
C:/folder/index.js>
The server running on the Port : 4000 😉
```

### Dotenv for storing environmental variables

- Install the dependency using the below command:

```bash
npm i dotenv
```

- Create a file `.env` at the root of the project and add the below code inside it:

```environments
MONGO_URL=your_mongodb_connection_string_here
```

- Insert the below import on the top of the code:

```javascript
import "dotenv/config";

const MONGO_URL = process.env.MONGO_URL;
```

## MongoDB setup for NodeJS

- Install the dependency using CLI:

```bash
npm i mongodb
```

- Include the below block of code:

```javascript
// include at the top of index.js
import { MongoClient } from "mongodb";

const MONGO_URL = "mongodb://127.0.0.1";
const client = new MongoClient(MONGO_URL); //dialing operation
await client.connect(); //This is a calling operation
//since calling will take some time, await needs to be prefixed
```

---

## Project Overview

This is a basic Express.js application that demonstrates a modular architecture with separation of concerns. It's designed to serve as a starting point for building RESTful APIs.

## Folder Structure

```
expess-boilerplate/
├── index.js                 # Application entry point
├── package.json             # Project dependencies and scripts
├── .env                     # Environment variables (not committed to git)
├── .gitignore               # Files and folders to ignore in git
├── controllers/             # Request handlers for routes
│   └── products.controller.js
├── routers/                 # Route definitions
│   └── products.routers.js
└── services/                # Business logic and data operations
    └── products.service.js
```

### File Descriptions

- **index.js**: The main application file where the Express server is initialized, middleware is configured, and routes are registered.

- **package.json**: Contains project metadata, dependencies, and npm scripts for running the application.

- **.env**: Stores sensitive environment variables like database connection strings and API keys. Should never be committed to version control.

- **.gitignore**: Specifies which files and directories should be ignored by git (e.g., `node_modules/`, `.env`, `*.log`).

- **controllers/**: Contains controller files that handle incoming requests and handles the response. Controllers call services to perform business logic.
  - `products.controller.js`: Handles product-related requests.

- **routers/**: Contains route definitions that map HTTP requests to controller methods.
  - `products.routers.js`: Defines routes for product endpoints (GET, POST, PUT, DELETE).

- **services/**: Contains business logic and data access operations. Services are called by controllers to fetch or manipulate data.
  - `products.service.js`: Contains product-related business logic.

## Installation

1. Clone or download the project:

   ```bash
   git clone <repository-url>
   cd express-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Configure environment variables by creating a `.env` file in the root directory.

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will run on the default port (typically `http://localhost:3000`). Check your `index.js` for the exact port configuration.

## Architecture Pattern

This project follows the **MVC (Model-View-Controller)** pattern:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and interact with the database
- **Routers**: Define API endpoints and route requests to appropriate controllers

## API Endpoints

### Products

- `GET /products` - Retrieve all products
- `GET /products/:id` - Retrieve a specific product
- `POST /products` - Create a new product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## Dependencies

Common dependencies for this project include:

- **express**: Web framework for Node.js
- **dotenv**: Environment variable management (optional)
- **cors**: Cross-Origin Resource Sharing (optional)

View `package.json` for the complete list of dependencies and their versions.

## Best Practices

- Keep controllers lean—they should primarily handle request/response logic
- Move business logic to services
- Use meaningful naming conventions for files and functions
- Add error handling and validation in controllers and services
- Use environment variables for configuration
