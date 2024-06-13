import React, { useState } from 'react';
import axios from 'axios';
import join from './join.css';

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    dateOfBirth: '',
    cnic: '',
    currentCity: '',
    bloodGroup: '',
    homeAddress: '',
    phoneNumber: '',
    joinAs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   const response = await axios.post('/api/join', formData);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    setFormData({
      fullName: '',
      fatherName: '',
      email: '',
      dateOfBirth: '',
      cnic: '',
      currentCity: '',
      bloodGroup: '',
      homeAddress: '',
      phoneNumber: '',
      joinAs: ''

    });
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            <h1>Join Our Mission and Make an Impact</h1>
            <p>Your contributions matter. Every action you take helps us [Achieve Goal or Outcome] and positively impact lives.</p>
            <div className="btn btn-danger rounded-pill px-5 mx-2">Join Us</div>
            <div className="btn btn-outline-danger rounded-pill px-5">Join Us</div>
          </div>
        </div>
      </div>
      <div className="cont">
        <form onSubmit={handleSubmit} className="mn lh-lg col-12">
          <h5 className='text-center'>Join Us</h5>
          <label htmlFor="fullName">Full Name</label>
          <input className='moo' type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          <label htmlFor="fatherName">Father Name</label>
          <input className='moo' type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
          <label htmlFor="email">Email Address</label>
          <input className='moo' type="text" name="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input className='moo' type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          <label htmlFor="cnic">CNIC</label>
          <input className='moo' type="text" name="cnic" value={formData.cnic} onChange={handleChange} />
          <label htmlFor="currentCity">Current City</label>
          <input className='moo' type="text" name="currentCity" value={formData.currentCity} onChange={handleChange} />
          <label htmlFor="bloodGroup">Blood Group</label>
          <input className='moo' type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
          <label htmlFor="homeAddress">Home Address</label>
          <input className='moo' type="text" name="homeAddress" value={formData.homeAddress} onChange={handleChange} />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input className='moo' type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          <h6>Join Us As</h6>
          <div className="radios">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="joinAs" value="Blood Donor" onChange={handleChange} />
              <label className="form-check-label" htmlFor="joinAs">Blood Donor</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="joinAs" value="Volunteer" onChange={handleChange} />
              <label className="form-check-label" htmlFor="joinAs">Volunteer</label>
            </div>
          </div>
          <button type="submit" className='btn btn-danger rounded-pill'>Join Us</button>
        </form>
      </div>
    </>
  );
}

export default Join;
