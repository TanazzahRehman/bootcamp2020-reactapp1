import React from 'react';
import './App.css';
import './Hello.css';

function Hello({nam}) {
  return <div className="overall"><center>
   <h1 className="myname"> Hello :<strong>{nam}</strong> </h1>
  
     <p><b> lets have a look into your academic qualifications</b></p>
     <br/>
     <h1><b><u>ACADEMIC QUALIFICATIONS:</u></b> </h1>
     <div className="hssc">
     <h2>HSSC1</h2>
     <h3 >AKHSS KARACHI</h3>
     
     <h4>SUBJECTS:</h4>
     <ul>
       <li>English</li>
       <li>Urdu</li>
       <li>Mathematics</li>
       <li>Physics</li>
       <li>Chemistry</li>
      </ul>
     
     <h2 ><b>RESULT: 93.7%</b></h2>
     </div>
     <br/>
     <div className="olevels">
     <h2 className="headings"> O LEVELS</h2>
     <h3 className="headings">BEACONHOUSE SCHOOL SYSTEM</h3>
     
     <h4 className="headings">SUBJECTS:</h4>
     <ul>
       <li>English</li>
       <li>Urdu</li>
       <li>Mathematics</li>
       <li>Physics</li>
       <li>Chemistry</li>
       <li>Computer Science</li>
       <li>Pakistan Studies</li>
       <li>Islamiat</li>
       <li>Additional Mathematics</li>
     
     </ul>
     <h2><b>RESULT: 7A*s and 2As</b></h2>
     </div>
     </center>

   </div>
  

}


export default Hello;
