import React from 'react'


const Home = () => {
  return (
   
   

    <div className='container-fluid mt-5 '>
    <div className='row '>
        <div className='col-12 col-sm-6 px-3'>
            <h4>welcome to kohat blood donation</h4>
            <h2 className='mt-3'>Join the Life saving <br />Movement Donate Blood <br /> and Make a Difference!"</h2>
            <p className='mt-3'>Welcome to donateblood.pk, Pakistan’s premier blood donation website! Our platform is dedicated to connecting blood donors with individuals in need, providing a lifeline of hope and support to those requiring blood transfusions across the country.</p>
            <div className="col-12">
            <button className='btn btn-danger rounded-pill px-5 my-3 '>Donate blood</button>
            <button className='btn btn-outline-danger rounded-pill px-5 mx-1 '> Learn more</button>
            </div>
            </div>

           <div className='col-12 col-sm-6 d-flex   justify-content-end  mt-2'>
                <img className='homeimage' src="/images/logo512.png"  alt="" />
                </div>
           
        
    </div>
</div>

  )
}

export default Home
