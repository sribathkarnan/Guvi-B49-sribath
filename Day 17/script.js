let promiseObj= new Promise((resolve,reject)=>{
    console.log("Hospital is open at 8clk");
    // resolve("hospital open now");
    reject("Hospital today not opened");
});

console.log(promiseObj);


//way-1

promiseObj.then(
   (val)=>{
    console.log("Hospital timing",val);
},
(err)=>{
    console,log("hospital timing",err);
});


//way-2

//promiseObj
//.then((val)=>{
//console.log("Hospital timing",val);
//})
//.catch((err)=>{
//console.log("Hospital timing",err);
//});

