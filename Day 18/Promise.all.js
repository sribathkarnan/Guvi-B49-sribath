//let promiseObj= new Promise((resolve,reject)=>{
 //   console.log("Hospital is open at 8clk");
    // resolve("hospital open now");
  //  reject("Hospital today not opened");
//});

//console.log(promiseObj);

function asyncTask1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("task 1 completed");
        },1000);

    });
}

function asyncTask2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           // reject("task 2 completed");
            resolve("task 2 completed");
        },1000);

    });
}

function asyncTask3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("task 3 completed");
        },1000);

    });
}

//asyncTask1()
//.then((val)=> {
  //  console.log(val);
 //   return asyncTask2();
//})
//.then((val)=> {
//    console.log(val);
 //   return asyncTask3();
//})
//.then((val)=> {
 //   console.log(val);
 //   console.log("all Task completed");
//})
//.catch((err)=>{
//    console.log("error",err);
//});

//Nammma chain method use panni onnu onnu call pandratha veda Promise.all use panna ella task uh call panna mudiyum

Promise.all([asyncTask1(),asyncTask2(),asyncTask3()])
.then((val)=> {
       console.log(val);
      console.log("all Task completed");
   })
   .catch((err)=>{
       console.log("error",err);
   });