import React from 'react';

import ColorSelect from './components/ColorSelect';

import './reset.css';
import './style.css'


function App() {

  

  return (
    <div className="App">
      <ColorSelect value="fa0507" onChange={(value) => console.log(value)}></ColorSelect>
    </div>
  );
}

export default App;
