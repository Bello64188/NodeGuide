const http = require('http');

const server = http.createServer((req,res)=>{
 var data= {
  firstName:"",
  lastName:"",
 };
  const body=[]
req.on('data', (chunk)=>{
body.push(chunk);
});

// process request payload
req.on('end',()=>{
let bodyrequest= Buffer.concat(body).toString();
let user_data= JSON.parse(bodyrequest);
data.firstName=user_data.firstName;
data.lastName=user_data.lastName;

res.statusMessage="Success";
res.statusCode=200;
res.setHeader("Content-Type","application/json");
res.write(`Hi ${data.firstName} ${data.lastName}, we welcome you on board!`)
res.end()
})

//res.write(JSON.stringify({name:"Bello Abdulazeez",age:30,state:"Kwara State"}))
//res.writeHead(200,"Success", {"Content-Type":"application/json"})
})


server.listen(2001);