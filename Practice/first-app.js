 //var fs= require('fs');

// fs.writeFileSync("hello.txt","Good morning Bello abdulazeez")
 const calulateAge=(dob)=>{
   const dobYear = new Date(dob);
   const today = new Date();
   let age= today.getFullYear()- dobYear.getFullYear()
   let monthDiff= today.getMonth()- dobYear.getMonth();
   let dayDiff= today.getDay()- dobYear.getDay();
   if(monthDiff<0||(monthDiff==0 && dayDiff<0)){
    age--
   }
   return age;
 }

const create_person_request={
    first_name:"Abdulazeez",
    last_name:"Bello",
    dob:"01-01-1992",
    age: calulateAge('07-16-1992') 
}

// const deconstruct = ({first_name,last_name})=>{
//  console.log(first_name + " " + last_name)
// };

// console.log(deconstruct(create_person_request));

//console.log(JSON.stringify(create_person_request));

// const toArray =(...args)=>{
//     return args;
// }
// console.log(toArray(0,0,9,0,9,0,9))

var[a1,a2] = ["Book","Pencil"]

console.log(a1,a2)