// import React from 'react'
// import Map from './Component/Map'
// import Loginpage from './Component/Loginpage'
// import Login from './Component/Login'
// const App = () => {
//   return (
//     // <Loginpage/>
//     // <Login/>
//     <Map/>
//     // <Text/>
    
//   )
// }

// export default App
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Login from './Component/Login'
// import { formControlClasses } from '@mui/material'
// import Loginpage from './Component/Login'
// import {BsFacebook} from "react-icons/bs"


// const App = () => {
//   return (
//     <div>
     
//       <Routes>
//         <Route path='/' element={ <Loginpage/>}/>
//         <Route path='/Login' element={<Login/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Map from './Component/Map'
// import

// const App = () => {
//   return (
//     <div>
//       {/* <Map/> */}
//       {/* <Landscape/> */}
//       <Homepage/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { Route, Routes } from 'react-router'
// import RegistrationPage from './Component/RegistrationPage'
// import LoginPage from './Component/LoginPage'



// const App = () => {
//   return (
//     <div>
    
//       <Routes>
//         <Route path='/' element={<RegistrationPage/>}/>
//         <Route path='/LoginPage' element={<LoginPage/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Page from './Component/Page'
import Landscape from './Component/Landscape';
import Calculator from './Calculator';

export const App = () => {
  return (
    <div>
     {/* <Landscape/> */}
<Calculator/>      
    </div>
  )
}
export default App;