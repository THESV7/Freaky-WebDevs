var express = require('express') ;
var app = express() ;
var cors = require('cors') ;
var http = require('http') ;
var server = http.createServer(app) ;
var Connect = require('./configure') ;
const {userProfileRouter,userLoginRouter,videoPostingRouter,eventPostingRouter,adminLoginRouter} = require('./controller') ;


var corsOptions = {
    origin : "http://localhost:3000" ,
}

app.use(express.json()) ;
app.use(cors(corsOptions)) ;

app.use("/v1/api/users",userProfileRouter) ;
app.use("/v2/api/users",userLoginRouter) ;
app.use("/v3/api/videosData",videoPostingRouter) ;
app.use("/v4/api/eventsData",eventPostingRouter) ;
app.use("/v5/api/users",adminLoginRouter) ;

Connect() ;
app.get("/", (req,res) => {
    res.send(" Your application is running ") ;
})

server.listen(3500, () => {
    console.log(" App launched sucessfully ") ;
})

