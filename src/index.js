const express = require('express');
require('./db/mongoose');
const User = require('./db/models/user');
const Task = require('./db/models/task');
const { response } = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');



const app = express();
const port = process.env.PORT ;


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port,() => {
  console.log('Server is up on port' + port);
})





