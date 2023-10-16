// import React, { Component } from 'react';
// import './Calculator.css'
// import { cal } from './Component/Data';

// class Calculator extends Component {
//   render() {
//     return (
//       // <div className="calculator">
//       //   <div className="display">0</div>

//       //       {
//       //           cal.map((item)=>{
//       //               return(
//       //                   <div className="row">

//       //                   <button>{item.n1}</button>
//       //                   <button>{item.n2}</button>
//       //                   <button>{item.n3}</button>
//       //                   <button>{item.n4}</button>

//       //                 </div> 

//       //               )
//       //           })
//       //       }


//       // </div>
//       <div>
//         <input type="number" placeholder='0' value={""} />
//       </div>
//     );
//   }
// }

// export default Calculator;

import React, { useState } from 'react'
const Calculator = () => {
  const [first, setfirst] = useState("")
  const operation = (val) => {
    setfirst(first.concat(val.target.value));
  }
  const clear=()=>{
    setfirst('');
  }
  const logic=()=>{
    setfirst(eval(first).toString());
  }
  return (
    <div>
      <input type="text" placeholder='0' value={first} />
      <input type="button" value="0" onClick={operation} />
      <input type="button" value="1" onClick={operation} />
      <input type="button" value="2" onClick={operation} />
      <input type="button" value="3" onClick={operation} />
      <input type="button" value="4" onClick={operation} />
      <input type="button" value="5" onClick={operation} />
      <input type="button" value="6" onClick={operation} />
      <input type="button" value="7" onClick={operation} />
      <input type="button" value="8" onClick={operation} />
      <input type="button" value="+" onClick={operation} />
      <input type="button" value="-" onClick={operation} />
      <input type="button" value="*" onClick={operation} />
      <input type="button" value="/" onClick={operation} />
      <input type="button" value="="onClick={logic}/>
      <input type="button" value="clear" onClick={clear}/>
    </div>
  )
}

export default Calculator