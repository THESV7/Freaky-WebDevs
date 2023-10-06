import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/Home/HomePage'
import NavBar from './Components/NavBar/NavBar'
import LoginPage from './Components/LoginPage/LoginPage'
import SignUp from './Components/SignUp/SignUp'
const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App