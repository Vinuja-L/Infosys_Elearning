const express =require ("express");
const app =express();

const db =require("./models");


const usersRouter =require ("./routes/Users");
app.use("/auth",usersRouter);


db.sequelize.sync().then(()=>{
    app.listen(3002,()=>{
        console.log("Sever is running on port 3002");
    });   
});
