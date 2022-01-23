const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks');
const mongoose = require('mongoose');
const notFound = require('./middleware/not-found');
require('dotenv').config()



//middleware
app.use(express.static('./public'))
app.use(express.json())


// app.get('/api/v1/tasks')  - get all tasks
// app.post('/api/v1/tasks')  - create a new task
// app.get('/api/v1/tasks/:id')  - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id')  - delete task

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

const connectDB = (url) => {
    return mongoose.connect(url)
}


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();