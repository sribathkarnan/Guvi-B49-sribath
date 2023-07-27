function operation (a,b){
    try{
        if(b>a){
            throw new Error("b is greater then a");   //custom error

        }
        const result=a-b;
        console.log("Result",result);
    }
    catch(err){
        console,log("Error occured",err);
    }
}

                        //  default syntax =>    try{
                        //                        catch(err){
                        //                        console,log("Error occured",err);
                        //                 }
                        //               }

operation(10, 8);