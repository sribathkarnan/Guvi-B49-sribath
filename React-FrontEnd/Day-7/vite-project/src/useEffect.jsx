import React, {useState, useEffect} from 'react'

function LifeCycleDemo() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted/Loaded!!");
        
    },[]); 

    useEffect(() => {
        console.log('Component updated!!!');
        
    }); 
  return (
    <div>
        <h1>useEffect demo</h1>
        <p>Count: {count} </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default LifeCycleDemo