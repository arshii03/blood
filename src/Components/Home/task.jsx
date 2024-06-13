import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';


import { FaCalendarDays } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import Home from './Home';
import style from './Home.css'
import Footer from '../footer/Footer';
import axios from 'axios';





const Task = () => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        email: '',
        bloodType: '',
      });

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };

      const handleBloodTypeChange = (bloodType) => {
        setFormData({ ...formData, bloodType });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // try {
        //   const response = await axios.post('http://localhost:5000/api/appointment', formData);
        //   alert(response.data);
        // } catch (error) {
        //   console.error('Error submitting form', error);
        // }
        setFormData({
            name: '',
            fatherName: '',
            email: '',
            bloodType: '',

        })

      };

    
    

  return (
    <>
    

   <Home/>





   {/*---------------------------- we lives section */}

  <div className='container-fluid px-3'>
    <h2>We Heal Lives</h2>
    <div className='row my-5'>
        <div className='col-12 col-sm-4 '>
            <div className='row'>
                <div className='col-12 image2'>
                <img className='image3' src="/images/image 35.png" alt="" />
                <h4>We Volaintear</h4>
                </div>
                <div className='col-12 py-3 '>
                    <p>Donate experties donations food bags and equpments  to loss privileged </p>
                </div>
            </div>
            

        </div>
        <div className='col-12 col-sm-4'>
            <div className='row'>
                <div className='col-12 image2'>
                <img className='image3' src="/images/image 36.png" alt="" />
                <h4>We Donate</h4>
                </div>
                <div className='col-12 py-3 '>
                    <p>Donate experties donations food bags and equpments  to loss privileged </p>
                </div>
            </div>
            

        </div>
        <div className='col-12 col-sm-4'>
            <div className='row'>
                <div className='col-12 image2'>
                <img className='image3' src="/images/image 37.png" alt="" />
                <h4>We Enchourage</h4>
                </div> 
                <div className='col-12  py-3'>
                    <p>Donate experties donations food bags and equpments  to loss privileged </p>
                </div>
            </div>
            

        </div>
    </div>
  </div>
     

     {/* we lives section endd ------             =------------ */}


     {/* services section start ------------------------- */}


     <div className='container-fluid  '>
        <div className='row '>
            <div className='col-12 col-sm-6 col-md-6 item '>
                <div className="item2">
                <img className='injimage' src="/images/image 38.png" alt="" />
                </div>
                <div className="item1">
                    <h5 className='txt'>our main services</h5>
                    <p>Allow users to register themselves as blood donors. Collect necessary information such as name, contact details, blood type, and any medical conditions.

                   
                    </p>
                    <a  className='lnk'href="">Learn More</a>
                </div>
       
           
               
            </div>
            <div className=" col-12 col-sm-6">
                <div className="row">
                    <div className="col-12 loc">
                        <div className="location">
                        <h5 className='txt'>Our Facilites </h5>
                        <p>Explain the steps involved in the donation process, from registration to post-donation refreshments and rest.</p>
                        <a className='lnk' href="">learn more</a>
                        </div>
                        <div className="location2">
                            <h5 className='txt'>our location</h5>
                            <p>kohat jarwanda</p>
                        </div>
                        
                    </div>
                    <div className="col-12 text">
                        <h5 className='txt'>Be a hero give a blood</h5>
                        <p className='text-light'>On behalf of all those whose lives you'll touch with your generosity, we extend our heartfelt gratitude. Together, we can create a healthier, brighter future for our communities.
                            <br />
                            On behalf of all those whose lives you'll touch with your generosity, we extend our heartfelt gratitude. Together, we can create a healthier, brighter future for our communities.
                        </p>
                        <button className='btn rounded-pill start'>Start Now</button>
                        <h5>Contact Us today</h5>
                        <p className='text-light'><FaEnvelope/>saadxyz@gnail.com</p>
                    </div>
                    
                </div>
            </div>
        </div>
     </div>
     {/* =----------------------service section end----------------- */}


     {/* ==========---------------donate blood section=------------------ */}


     <div className="container-fluid my-5 ">
        <div className="row">
            <div className="col-12 col-sm-6 align-middle align-self-center p-3">
                <h4 className='txt'>Why Donate blood?</h4>
                <p>Donating blood is a crucial act of generosity that saves lives and improves health outcomes for individuals in need. Here are several reasons why donating blood is important

               </p>
               <button className='btn btn-outline-danger rounded-pill align-middle'> Learn More</button>
            </div>
            <div className="col-12 col-md-6 ">
             <div className="row">
                <div className="col-12 border border-danger rounded p-3 mb-3">
                <h5 className='txt'>1. Save lives</h5>
                <p>Blood transfusions are vital for patients undergoing surgeries, recovering from accidents, or battling life-threatening illnesses such as cancer, anemia, or blood disorders. By donating blood, you can directly contribute to saving someone's life.</p>
                👍🌟💪
                </div>
                <div className="col-12 p-3 border border-danger rounded mb-3">
                <h5 className='txt'>2. Emergency situation</h5>
                <p>Blood transfusions are vital for patients undergoing surgeries, recovering from accidents, or battling life-threatening illnesses such as cancer, anemia, or blood disorders. By donating blood, you can directly contribute to saving someone's life.</p>
                👍🌟💪
                </div>
                <div className="col-12 p-3 border border-danger rounded">
                <h5 className='txt'>3. Medical Procedures</h5>
                <p>Blood transfusions are vital for patients undergoing surgeries, recovering from accidents, or battling life-threatening illnesses such as cancer, anemia, or blood disorders. By donating blood, you can directly contribute to saving someone's life.</p>
                👍🌟💪
                </div>
             </div>
            </div>
           
        </div>
     </div>
     {/* ---------------------donate lood section end-------------- */}



     {/* -----------------------------blood drives---------------------- */}

     <div className="container-fluid  ">
        <div className="row ">
            <div className="col-12 p-4 lh-lg col-md-6">
                <div className="row">
                    <div className="col-12  ">
                <h5 className='txt'>Blood Drives</h5>
                <p>Upcoming blood donation events near you</p>
                </div>
                <div className="col-12 border-bottom border-danger mt-4">
                <h6>Blood drives 1</h6>
                <p> <FaCalendarDays/> cross blood drive <span className='text-danger mx-5'>Aug 07 2024</span></p>
                </div>
                <div className="col-12 border-bottom border-danger mt-4">
                <h6>Blood drives 2</h6>
                <p> <FaCalendarDays /> cross blood drive <span className='text-danger mx-5'>Aug 07 2024</span></p>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-6 ">
                <img  className='image2'src="/images/image55.png" alt="" />
            </div>
        </div>
     </div>


     {/* ---------------------blood drive section end----------------- */}



 {/* ---------------------donation center----------------- */}

     


     <div className="container  mt-5">
     <h4 className='txt'>Requaired Donation Product</h4>
       
  <div className="row ">
    
    <div className="col-12 col-sm-4 p-3">
    
    <div className="card" >
  <img src="/images/image 48.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>White blood</h6>
   <h6>500 MI</h6>
  </div>
</div>
    </div>
    <div className="col-12 col-sm-4 p-3">
    <div className="card" >
  <img src="/images/image 47.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Red blood</h6>
   <h6>200 MI</h6>
  </div>
</div>
    </div>
    <div className="col-12 col-sm-4 p-3">
    <div className="card" >
  <img src="/images/image 49.png" className="card-img-top" alt="..."/>
  <div className="card-body">
   <h6>Platelates</h6>
   <h6>200 MI</h6>
  </div>
</div>
    </div>
  </div>
  <div className="btj d-flex justify-content-start justify-content-sm-end py-3">
  <button className='btn btn-danger rounded-pill '>Donate blood</button>
  </div>
</div>


<div className="container  mt-5">
     <h4 className='txt'>Blood Donation Centers</h4>
       
  <div className="row ">
    
    <div className="col-12 col-sm-4 p-3">
    
    <div className="card" >
  <img src="/images/image 44.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>RMI Leborteies</h6>
   <h6>Hangu Road Kohat</h6>
  </div>
</div>
    </div>
    <div className="col-12 col-sm-4 p-3">
    <div className="card" >
  <img src="/images/image 40.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Kohat Medical center</h6>
   <h6>Pindi Rad Kohat</h6>
  </div>
</div>
    </div>
    <div className="col-12 col-sm-4 p-3">
    <div className="card" >
  <img src="/images/image 45.png" className="card-img-top" alt="..."/>
  <div className="card-body">
   <h6>Madina blood center</h6>
   <h6>Kohat Lachi</h6>
  </div>
</div>
    </div>
  </div>
</div>
 {/* ---------------------donation center end---------------- */}


  {/* ---------------------donation history--- start------------- */}

 <div className="container-fluid mt-4">
    <div className="row">
        <h4 className='txt fs-1'>Donation History</h4>
        <div className="col-12 col-sm-6  ">
            <p className='fs-5  mb-5'>Thank you for your commitment to saving lives through blood donation. Your generosity has made a significant impact on our community, and we're grateful for your continued support. Below, you'll find a summary of your donation history with us:</p>
            <button className='btn btn-danger rounded-pill px-4 mb-3'> Donate blood</button>
        </div>
        <div className="col-12 col-sm-6">
        <div className="row">
            <div className="col-12 bg-danger rounded p-2 px-4">
                <p className='text-light'>Total Donations</p>
                <p className='text-light'>145</p>
                <h6 className='text-light'>29%</h6>
            </div>
            <div className="col-12 bg-danger rounded p-2 px-4 mt-3">
                <p className='text-light'>Total Donations</p>
                <p className='text-light'>7 March 2024</p>
                <h6 className='text-light'>29%</h6>
            </div>
        </div>
        </div>
    </div>
 </div>

  {/* ---------------------donation history--- end------------- */}

  <div className="container-fluid mt-5 mb-3 px-4">
    <div className="row">
        <div className="col-12 col-sm-6 border rounded bg-secondary">

        </div>
        <div className="col-12 col-sm-6 px-3 ">
            <h4 className='txt'>Why People Trust Us</h4>
            <p>Certainly! Here's a sample text explaining why people trust a blood donation center:</p>
            <ol className='mt-5 text-body-secondary'>
                <li> <strong>Commitment to Safety: </strong>We prioritize the safety and well-being of our donors and recipients above all else. Our state-of-the-art facilities and stringent safety protocols ensure that every donation process is conducted with the highest standards of hygiene and professionalism.</li>
            </ol>
            <ol className='mt-3 text-body-secondary'>
                <li> <strong>Commitment to Safety:</strong> We prioritize the safety and well-being of our donors and recipients above all else. Our state-of-the-art facilities and stringent safety protocols ensure that every donation process is conducted with the highest standards of hygiene and professionalism.</li>
            </ol>
            <ol className='mt-3 text-body-secondary'>
                <li> <strong>Commitment to Safety:</strong> We prioritize the safety and well-being of our donors and recipients above all else. Our state-of-the-art facilities and stringent safety protocols ensure that every donation process is conducted with the highest standards of hygiene and professionalism.</li>
            </ol>
        </div>
    </div>
  </div>

 {/* ---------------------people trust us start------------ */}
 <div className="container-fluid mt-5 ">
    <div className="row">
        <div className="col-12 col-sm-7  align-middle align-self-center px-3 ">
            <h4 className='txt'>What People Says About Us</h4>
            <p>we take pride in the positive feedback we receive from our donors and recipients. <br />Here are some testimonials from individuals who have experienced our services firsthand:</p>
            <button className='btn btn-outline-danger rounded-pill px-5 '> Learn more</button>
        </div>
        <div className="col-12 col-sm-5 bg-dark   rounded mt-3  ">
            <div className="row">
                <div className="col-5 bg-secondary my-5 rounded people2"></div>
                <div className="col-7  my-5">
                    <p className='text-light'>"I've been donating blood at [Your Blood Donation Center Name] for years, and I'm always impressed by the professionalism and friendliness of the staff. They make the donation process quick and easy,"</p>
                    ⭐⭐⭐
                    

                </div>
            </div>
        </div>
    </div>
 </div>

  {/* ---------------------people trust us end------------ */}

    {/* ---------------------reviews start------------ */}
<div className="container mt-5">
    <div className="row">
        <div className="col-12 col-sm-6">
        <p >⭐⭐⭐<br />
"As a recipient of donated blood, I can't thank kohat Blood Donatin enough for their lifesaving contribution. The staff made me feel comfortable and supported throughout my treatment, and I'm grateful to the donors who selflessly gave blood to help me and others in need."</p>
         <img src="/images/Ellipse 1.png" alt="" />
         <div>sakib</div>
        </div>
        <div className="col-12 col-sm-6">
        <p>⭐⭐⭐<br />
"As a recipient of donated blood, I can't thank kohat Blood Donatin enough for their lifesaving contribution. The staff made me feel comfortable and supported throughout my treatment, and I'm grateful to the donors who selflessly gave blood to help me and others in need."</p>
         <img src="/images/Ellipse 1.png" alt="" />
         <div>sakib</div>
        </div>
        <div className="col-12 col-sm-6 mt-3">
        <p>⭐⭐⭐<br />
"As a recipient of donated blood, I can't thank kohat Blood Donatin enough for their lifesaving contribution. The staff made me feel comfortable and supported throughout my treatment, and I'm grateful to the donors who selflessly gave blood to help me and others in need."</p>
         <img src="/images/Ellipse 1.png" alt="" />
         <div>sakib</div>
        </div>
        <div className="col-12 col-sm-6 mt-3">
        <p>⭐⭐⭐<br />
"As a recipient of donated blood, I can't thank kohat Blood Donatin enough for their lifesaving contribution. The staff made me feel comfortable and supported throughout my treatment, and I'm grateful to the donors who selflessly gave blood to help me and others in need."</p>
         <img src="/images/Ellipse 1.png" alt="" />
         <div>sakib</div>
        </div>
    </div>
</div>

{/* ---------------------reviews end------------ */}


{/* ---------------------appointment section star------------ */}


<div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-sm-6 align-middle align-self-center">
            <h4 className='txt'>Book An Appointment</h4>
            <p>Booking your blood donation appointment is quick and easy. Follow the steps below to schedule your donation:</p>
          </div>
          <div className="col-12 col-sm-6">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control border border-danger" id="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="fatherName" className="form-label">Father Name</label>
                <input type="text" className="form-control border border-danger" id="fatherName" value={formData.fatherName} onChange={handleChange} />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control border border-danger" id="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-12 boxes">
                <label className='mb-3' htmlFor="">Blood Type</label>
                <ul className='an'>
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-'].map((type) => (
                    <a href="#" key={type} onClick={(e) => { e.preventDefault(); handleBloodTypeChange(type); }}>
                      <li className={`A border ${formData.bloodType === type ? 'selected' : ''}`}>{type}</li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-danger rounded-pill float-end px-5">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>

{/* ---------------------appointment section end------------ */}








     


    
    
    
    </>
  
  )
}

export default Task;
