const express=require('express');
require('./db/config');
const cors=require('cors');
const User=require('./db/User');
const Userdetail=require('./db/Userdetail');
const Problems=require('./db/Problem');
const bodyParser =require('body-parser');

const app=express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
app.use(express.json());
app.use(cors());

// signup api.............
app.post('/register',async(req,resp)=>{
    let user=new User(req.body);
    let result= await user.save();
    result=result.toObject();
    delete result.password;
    delete result.cpassword;
    resp.send(result);
});

// Login api......
app.post('/login',async(req,resp)=>{
    if(req.body.email&&req.body.name&&req.body.password)
    {
        let user=await User.findOne(req.body).select("-password -cpassword")
    if(user)
    {
        resp.send(user);
    }
    else
    {
        resp.send({result:"user not found"});
    }
    }
    else
    {
        resp.send({result:"please provide all details"});
    }
    
});

// to save user personal details.........

app.put('/profilepage/:id',async(req,resp)=>{
    // const id=req.params.id;
   
    let result=await Userdetail.findOne({username:req.params.id});
    if(result)
    {
        let result=await Userdetail.updateOne(
            {username:req.params.id},
            {
                $set:req.body
            }
        )
        resp.send(result).status(200);
    }
    else{
        let userdetail=new Userdetail(req.body);
        userdetail.username=req.params.id;
        let result= await userdetail.save();
      resp.send(result);
    }
    
    
});

// to show personal info saved in db.........

app.get("/profilepage/:id",async(req,resp)=>{
    let result=await Userdetail.findOne({username:req.params.id});
    if(result)
    {
        resp.send(result);
        
    }
    else
    {
        resp.send({result:"no record found"});
    }
});


// To display list of the questions.......

app.get("/:type",async(req,resp)=>{
    let problems= await Problems.find({type:req.params.type});
    
    if(problems.length>0)
    {
        resp.send(problems);
    }
    else{
        resp.send({result:"No problem found"});
    }
});
//to post problem 
app.post('/',async(req,resp)=>{
    let problem=new Problems(req.body);
    let result= await problem.save();
    resp.send(result);
});

// to render the content of the problem

app.get('/problem/:id',async(req,resp)=>{
    let result=await Problems.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result);
    }
    else
    resp.send({result:"no record found"});
});


// api to update status of the problem.......
app.put('/problem/:id',async(req,resp)=>{
    let result=await Problems.findOne({_id:req.params.id});
    if(result)
    {
        let result=await Problems.updateOne(
            {_id:req.params.id},
            {
                $set:req.body
            }
        )
        resp.send(result).status(200);
    }
    resp.send("working");
})

app.listen(5800);