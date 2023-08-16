function getToy(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const toy="Teddy bear";
            resolve(toy);
        },2000);
    });
}

async function playWithToys(){
    console.log("Let's play with caes and blocks");
    try{
       const toy= await getToy();
       console.log("yay I got my",toy);
       console.log("Now i can continue playing with others toys");
    }
    catch(err){
        console.log("Error occured",err);
    }
    
    // getToy()
    // .then((val)=>{
    //     console.log("Yay I got my",toy);
    //     console.log("Now i can continue playing with others toys");
    // })
    // .catch((err)=>{
    //     console.log("Error occured",err);
    // });

}

playWithToys();