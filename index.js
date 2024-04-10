const express=require('express');

const path=require('path')

const app=express();

const bodyParser=require('body-parser');

app.use(bodyParser.json());

const sequelize=require('./util/database')

const userRoute=require('./Routes/userRoute')

app.use('/User',userRoute);

app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'Views','index.html'));
})


sequelize.sync();
app.listen(3000);