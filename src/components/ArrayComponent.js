import React from 'react';
import useArray from '../Hook/useArray';
import '../App.css';

const   ArrayComponet = () => {
  const { array, set, push ,remove, filter, update, clear} = useArray([15,17,22,25,30,45,78,14])
  return (
    <>
      <div> {array.join(",")}</div>
      <button className="btn" onClick={()=>push(7)}>Add</button>
      <button className="btn" onClick={()=>update(17,37)}>Change</button>
      <button className="btn" onClick={()=>remove(25)}>Remove</button>
      <button className="btn" onClick={()=>filter(n => n < 30)}>Filter</button>
      <button className="btn" onClick={()=>set([7,9])}>Set</button>
      <button className="btn" onClick={clear}>Clear</button>
    </>
  )
}

export default ArrayComponet;