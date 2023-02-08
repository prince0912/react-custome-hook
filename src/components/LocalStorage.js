import *  as React from 'react';
// import './styles.css';
import useLocalStorage from '../Hook/useLocalStorage';

const LocalStorage = () => {
    const [storedValue, setStoredValue] = useLocalStorage(
        'Prince',
        '09'
    )
  return (
    <div>
        <select className='select'  value={storedValue}
            onChange={(e)=>setStoredValue(e.target.value)}
        >
            <option value="dark">Dark</option>
            <option value="light">Light</option>

        </select>
        <p className="desc">
                Value From local stroge <span >{storedValue}</span>
        </p>
    </div>
  )
}

export default LocalStorage;