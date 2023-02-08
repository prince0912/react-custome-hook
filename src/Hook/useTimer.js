import React,{useState, useEffect} from 'react';

let TUseTimer ={
    days: string,
    hours: string,
    minutes: string,
    seconds: string,
};


const formatNumber =(num)=>{
    return num < 10  ? `${num}` : `${num}`
}


const DAYS_IN_MS = 1000*60*60*24;
const HOURS_IN_MS = 1000*60*60;
const MIN_IN_MS = 1000*60
const SEC_IN_MS = 1000

const getTimeDiff = (diffInMSec) =>{
    let diff = diffInMSec;
    const days = Math.floor(diff / DAYS_IN_MS);
    diff -= days * DAYS_IN_MS;
    const hours = Math.floor(diff / HOURS_IN_MS);
    diff -= hours * HOURS_IN_MS;
    const minutes = Math.floor(diff / MIN_IN_MS);
    diff -=  minutes * MIN_IN_MS
    const seconds = Math.floor(diff / SEC_IN_MS);
    return{
        day:formatNumber(days),
        hours:formatNumber(hours),
        minutes:formatNumber(minutes),
        seconds:formatNumber(seconds)
    }
}

const useTimer = (targetTime) => {
    const [timeLeft, setTimeLeft] = useState(targetTime - Date.now())

    useEffect(()=>{
        const id = setTimeout(()=>{
            setTimeLeft((prev)=> prev -1000);
        },1000);
        return () =>{
            clearTimeout(id);
        }
    });

    return getTimeDiff(timeLeft)


  
};

export default useTimer; 