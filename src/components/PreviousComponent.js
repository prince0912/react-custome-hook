import React,{useState} from 'react';
import usePrevious from '../Hook/usePrevious';

const PreviousComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Prince");
    const previousCount =  usePrevious(count); 



  return (
    <>
    
    <div>{count}-{previousCount}</div>
    <div>{name}</div>
    <button onClick={()=>setCount(currentCount=> currentCount +1)}>Increment</button>
    <button onClick={()=>setName("Prince")}>Change Name</button>

    </>
  )
}

export default PreviousComponent