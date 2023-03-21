const express = require("express");
const fs = require('fs');
const app = express();
const morgan = require("morgan")
const tourRouter = require("./Routes/tourRoutes");
const userRouter = require("./Routes/userRoutes");
const connectdb = require("./db/conn");

//1.)Middlewares
app.use(morgan("tiny"))
app.use(express.json())
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
})
app.use("/api/v1/tours",tourRouter)
app.use("/api/v1/users",userRouter)
app.use(express.static(`${__dirname}/starter/public`));
console.log(`${__dirname}/public`)
connectdb();
// 2.)Routing
// app.get("/api/v1/tours",getAllTours)
// app.post("/api/v1/tours",createTour)
// app.get("/api/v1/tours/:id",getToursById);
// app.patch("/api/v1/tours/:id",updateTour)

app.listen(4000,()=>{
    console.log("Connection done")
})


/* 
notes --- 
app.use(express.static(`${__dirname}/starter/public`)); ----> is to process the static page 
morgan - is to consolethe request format
*/