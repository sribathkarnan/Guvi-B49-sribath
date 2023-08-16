import React, {useStates,useEffect} from 'react'

function LifeCycleDemo() {
  //Mounting phase
  const [count, setCount] = useState(0);

    useEffect(()=>
    console.log("Component Mounted/Loaded!! "));
    //return()=>{
      //console.log("Component unMounted!!");
      //}
},[]);//Empty dependency array runs this effect only once after the initial render

  return (
    <div>LifeCycleDemo</div>
  )
}

export default LifeCycleDemo