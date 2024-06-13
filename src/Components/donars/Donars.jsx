import React from 'react'
import donars from './donars.css'
import Cards from './Cards'

export default function Donars() {
  return (
    <>
    <div className="container-fluid pt-5 mb-5">
      <div className="row">
        <div className="col-12 col-sm-6  align-middle align-self-center">
          <h2 className='textarea'>Donate A Drop And Make A Change</h2>
          <p>Every drop counts, especially when it comes to saving lives. We're reaching out to you today with an urgent plea for help. The need for blood is constant, and your donation can make a significant difference in someone's life.</p>
          <div className="col-12 mb-4">
          <button className='btn btn-danger rounded-pill px-4 mx-2'>Donate Blood</button>
          <button className='btn btn-outline-danger rounded-pill px-4 '>Learn More</button>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <img className='img' src="/images/image2.png" alt="" />
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <nav className='navbar d-flex '>
          <a class="navbar-brand txt">Blood Donars</a>
    <form className="d-flex d" role="search">
      <input className="form-control px-5 rounded-pill s me-2" type="search" placeholder="Search with blood group or city" aria-label="Search"/>
      <button className="btn btn-danger rounded-pill search px-5" type="submit">Search</button>
    </form>
    </nav>
          



          </div>
        </div>
       
      </div>
    </div>
    <Cards name='Arshii'  blood='o+' city='kohat' contact='02333333'/>
    <Cards name='Shayan'  blood='o-' city='islambad' contact='023248477'/>
    <Cards name='Adil'  blood='A+' city='karachi' contact='02333444'/>
    <Cards name='Arbaz'  blood='A-' city='kolkata' contact='02335553'/>
    <Cards name='Amir'  blood='B+' city='peshawar' contact='023666633'/>
 
      <div className="col-12 d-flex justify-content-center my-5">
        <button className='btn btn-danger rounded-pill px-5'>View more</button>
      </div>
  
   

   
    </>
  )
}

