import React from 'react';
import ToggleComponent from './components/ToggleComponent';
import './App.css'
import UpdateComponent from './components/UpdateComponent';
import ArrayComponet from './components/ArrayComponent';
import EffectComponent from './components/EffectComponent';
import PreviousComponent from './components/PreviousComponent';
import LocalStorage from './components/LocalStorage';

function App() {
  return (
    <div className="App">

      <EffectComponent/>
      <ArrayComponet/>
      <UpdateComponent/>
      <ToggleComponent/>
      <PreviousComponent  />
      <LocalStorage/>
    </div>
  )
}

export default App;
