import React, { useEffect, useRef } from 'react'

const useUpdate = (callback, dependencies) => {
    const firstReanderRef=useRef(true)

    useEffect(()=>{
        if(firstReanderRef.current){
            firstReanderRef.current=false
            return
        }
        return callback()
    }, dependencies)

  return (
    <div>useUpdate</div>
  )
}

export default useUpdate;