const express=require("express");
const app=express();

  app.use(express.json());

app.get('/home',(req,res)=>{
    return res.send("hew are you ready to tackle these sitution")
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    return res.send("data recieved sucessfully")
})

app.listen(8000,()=>{
    console.log("app is running on port 8000");
})