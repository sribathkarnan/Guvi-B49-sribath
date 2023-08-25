import React { useRef,useState } from 'react'

function Ref() {
    const [count, setCount] = useState(0);
    const countRef= useRef(0);
    const textRef = useRef(null);//document.getElementById
    console.log("countRef: ",countRef);

    function handleClick(){
        //setCount(count +1);
        countRef.current++;
        console.log("Text REF ",textRef.current);

        textRef.current.focus();
        textRef.current.value = "Manikandan";

        console.log("State value: ",count);
        console.log("Ref value: ",countRef.current);
    }
  return (
    <div>
      <h1>UseRef Demo:</h1>
      <p>State value: </p>
      <p>Ref value: {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>

      <input type="text" ref={textRef}></input>
    </div>
  )
}

export default Ref