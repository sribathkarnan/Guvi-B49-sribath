import React from 'react'

function ChildComponent(props) {

    const sendDataToParent =() =>{
        const data = "hello from Child!!";
        props.onDataFromChild(data);  //calling the calback function from parameter
    }
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={sendDataToParent}> Send Data to parent </button>
    </div>
  )
}

export default ChildComponent