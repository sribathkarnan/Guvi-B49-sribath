
const apiUrl="https://restcountries.com/v3.1/all";


fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
      //   console.log("$$%$%$%$%$%$% ",response.json());

    }
  })
  .then((val) => {
    console.log(val);
    for (var i = 0; i < val.length; i++) {
      if (val[i].name.common == "Peru") {          //common na oru country matum find panna entha method 
        console.log(val[i].flag);
      }
      else{
          console.log("value undefined");
      }
    }
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
