import React from 'react';
import './App.css';
import Hello from './Hello';

function App({full_name, age}) {
  return <div> 
   Hello from App.js updated by {full_name} of age Age = {age - 7}
   <br/>
   <Hello nam = {full_name} ></Hello>
   </div>
}

export default App;
