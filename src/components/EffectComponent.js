import {useState} from 'react';
import useEffectOnce from '../Hook/useEffectOnce';

const EffectComponent = () => {
    const [count, setCount] = useState(0);

    useEffectOnce(()=>{
        alert("useEffect once")
    })
  return (

    <>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default EffectComponent;