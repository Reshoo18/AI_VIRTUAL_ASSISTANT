import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'

const App = () => {
  return (
 <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
   </Routes>
  )
}

export default App
