function performcalculation(operation){
    //const num1= 10;
    //const num2= 20;

    //const num1= Number(document.getElementById("num1").value);
    //const num2= Number(document.getElementById("num2").value);

    const num1=Number(promt("please enter the the value of number1:"));
    const num2=Number(promt("please enter the the value of number2:"));
    
    let result;
    
switch (operation){
    case "add":
        result=num1+num2;
        break;
  case "sub":
        result=num1-num2;
        break;
  case "mul":
        result=num1*num2;
        break;
  case "div":
        result=num1/num2;
        break;
  default:
    result="Invalid Operation";
}
const msg= confirm("Do you want to show the Result");
  if(msg===true){
    document.getElementById("result").innerText= result;
  }
  else{
    document.getElementById("result").innerText= "Result cannot be shown ";
  }

  const addElem= document.getElementById("add");
  addElem= addEventListener("click",function(){
    performcalculation("add");
  })

  const subElem= document.getElementById("sub");
  addElem= addEventListener("click",function(){
    performcalculation("sub");
  })

  const mulElem= document.getElementById("mul");
  addElem= addEventListener("click",function(){
    performcalculation("mul");
  })

  const divElem= document.getElementById("div");
  addElem= addEventListener("click",function(){
    performcalculation("div");
  })
 setInterval(function(){
    alert("hi,hru");
   },20000);

  setTimeout(function(){
    console.log("This message will be logged after 5000 millseconds");
  },5000);
  

   //alert(result);
   //document.getElementById("result").innerText= result;

}