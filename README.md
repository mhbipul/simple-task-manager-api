

# **Task Manager API**  

A simple RESTful API for managing tasks, built using **Node.js**, **Express.js**, and **MongoDB**.

## **Features**
- **CRUD Operations**: Create, Read, Update, and Delete tasks.  
- **Error Handling**: Custom error responses for better debugging.  
- **Async Middleware**: Uses `asyncWrapper` for clean and efficient async operations.  
- **MongoDB Integration**: Data is stored and retrieved from a MongoDB database.  

## **Installation & Setup**
1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
   ```
2. **Install dependencies**  
   ```sh
   npm install
   ```
3. **Set up environment variables**  
   - Create a `.env` file in the root directory  
   - Add the following variables:  
     ```env
     PORT=3000
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Start the server**  
   ```sh
   npm start
   ```
   The API will be running at `http://localhost:3000`.

## **API Endpoints**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/v1/tasks` | Get all tasks |
| `GET` | `/api/v1/tasks/:id` | Get a single task by ID |
| `POST` | `/api/v1/tasks` | Create a new task |
| `PATCH` | `/api/v1/tasks/:id` | Update a task |
| `DELETE` | `/api/v1/tasks/:id` | Delete a task |

## **Tech Stack**
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Middleware**: Async error handling, Custom error handler  
- **Environment Configuration**: dotenv  



