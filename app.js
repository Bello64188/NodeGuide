const http= require('http')

const express= require('express')

const app=  express();

app.use((req,res,next)=>{
   console.log('Middleware one');
   next();
})

app.use((req,res,next)=>{
console.log('Middleware two')
res.end("Hello world")
});

const server = http.createServer(app);

 server.listen(2001);