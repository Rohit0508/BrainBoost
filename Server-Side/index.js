const express=require('express');

const app=express();
app.get('/',(req,resp)=>{
    resp.send("running machine");
})

app.listen(5890);