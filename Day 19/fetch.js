async function fetchData(){
   const apiUrl="https://restcountries.com/v3.1/all";

  try {
      const responce = await fetch(apiUrl);
      const data = await responce.json();
       for (var i= 0;i<data.length;i++){
        if (data[i].name.commen=="Peru"){
           console.log(val[i].flag);
           }
        
        
      }
   }
}

