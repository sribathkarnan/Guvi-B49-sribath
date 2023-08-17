import React, { useState} from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [recievedData, setReceivedData] = useState('');

    //Calback function to receive data from child component!
    const handleDataFromChild = (data) =>{
        setReceivedData(data);
    }


  return (
    <div>
        <h1>Parent Component</h1>
        <p>Data from Child: {recievedData}</p>
        <ChildComponent onDataFromChild={handleDataFromChild}/>
    </div>
  )
}

export default ParentComponent