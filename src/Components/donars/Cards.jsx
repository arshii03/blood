import React from 'react'
import donars from './donars.css'

const Cards = (props) => {
  return (
   
   <>
    <div className="container-fluid  ">
      <div className="row px-1 ">
        <div className="col-12 col-sm-4 border-top border-2 d-flex  py-3 ">
            <div className="col  ">
                <h6  className='lh-lg'>Name</h6>
                <h6 className='lh-lg'>  Blood Group</h6>
                <h6 className='lh-lg'>City</h6>
                <h6 className='lh-lg'>Contact Number</h6>
            </div>
            <div className="col2">
                <p>{props.name}</p>
                <p>{props.blood}</p>
                <p>{props.city}</p>
                <p>{props.contact}</p>
            </div>
            
        </div>
        <div className="col-12 col-sm-4 border-top border-2 d-flex  py-3">
            <div className="col  ">
                <h6  className='lh-lg'>Name</h6>
                <h6 className='lh-lg'>  Blood Group</h6>
                <h6 className='lh-lg'>City</h6>
                <h6 className='lh-lg'>Contact Number</h6>
            </div>
            <div className="col2">
                <p>{props.name}</p>
                <p>{props.blood}</p>
                <p>{props.city}</p>
                <p>{props.contact}</p>
            </div>
            
        </div>
        <div className="col-12 col-sm-4 border-top border-2 d-flex  py-3">
            <div className="col  ">
                <h6  className='lh-lg'>Name</h6>
                <h6 className='lh-lg'>  Blood Group</h6>
                <h6 className='lh-lg'>City</h6>
                <h6 className='lh-lg'>Contact Number</h6>
            </div>
            <div className="col2">
                <p>arshii</p>
                <p>o+</p>
                <p>Kohat</p>
                <p>022816678</p>
            </div>
            
        </div>
      </div>
    </div>
   </>
  )
}

export default Cards
