import React from 'react'
import footer from './footer.css'

const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-danger p-4  mt-5">
    <div className="row">
    <div className="col-12 col-sm-4 ">
        <img className='fimg' src="/images/image 50.png" alt="" />
    </div>
    <div className="col-12 col-sm-8 mt-4 align-middle align-self-center px-4">
        <div className="row">
            <div className="col-12 col-sm-9 ">
                <h2 className='text-light fs-1 ' >Kohat Blood <br /> Donation</h2>
                <p className='text-light '> <img className='line2' src="/images/vector 1.png" alt="" /> Donate Blood Save Lives <img className='line2' src="/images/vector 1.png" alt="" /></p>
                <p className='text-light '>Welcome to donateblood.pk, Pakistan’s premier blood donation website! Our platform is dedicated to connecting blood donors with individuals in need, providing a lifeline of hope and support to those requiring blood transfusions across the country.</p>
            </div>
            <div className="col-12 col-sm-3 mt-4 f">
                <h6>Use full links</h6>
                <ul className='lnks'>
                    
                    <li>Home</li>
                    <li>Donars</li>
                    <li>Blood Request</li>
                    <li>Join us</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</div>
    </>
  )
}

export default Footer
