const fetchData= function (){
    let promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("show me at 3s")
        },3000)
         setTimeout(()=>{
          resolve("show me at 4s")
        },4000)
    });
    return promise
}

setTimeout(() => {
    fetchData()
    .then(t=>{
        console.log(t)
    }).then(s=>{console.log(s)})

    console.log("show me at 2s")
}, 10);

console.log("Hi");
console.log("Good morning")