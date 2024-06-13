import React from 'react'
import { Routes, Route,Link, BrowserRouter } from 'react-router-dom'
import Login from '../Login/Login'

const Navbar = () => {
  return (
  <>
 
    <nav class="navbar navbar-expand-md  ">
    <div class="container-fluid ">
      <a class="navbar-brand text-center" href="#"> Kohat Blood <br />Donation</a>
    
    
      <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
        <ul class="navbar-nav  gap-4 ">
          <li class="nav-item">
            <Link class="nav-link active " aria-current="page" to="/task">Home</Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link text-body-emphasis" to="/donars">Donars</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-body-emphasis" to="/request">Blood Requests</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-body-emphasis " to='/joinus'>Join Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link  text-body-emphasis" to='/about'>About Us</Link>
          </li>
        </ul>
  
      </div>
      <Link  to="/"className='btn btn-danger  rounded-pill px-4'> Donate Blood</Link>
    </div>
  </nav>

   
<Routes>
  <Route path='/' element={<task/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>

</>
  )
}

export default Navbar
