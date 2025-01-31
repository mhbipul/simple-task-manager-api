const connectDb = require("./db/connect")
const express = require("express");
const tasks = require("./routes/task");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config()


const app = express();
const port = 3000;

const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening on Port: ${port}...`));

    } catch (error) {
        console.log(error)
        
    }
}

//middleware
app.use(express.static('./public'))
app.use(express.json())



//routes 


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

start()


