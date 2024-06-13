import React, { useState } from 'react';
import './login.css';  // Make sure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    fathername: '',
    password: '',
    city: '',
    cnic: '',
    bloodgroup: '',
    email: '',
    phone: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   const response = await fetch('https://your-backend-url.com/api/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   if (response.ok) {
    //     alert('Account created successfully!');
    //     // Optionally, redirect the user to another page
    //   } else {
    //     alert(`Error: ${result.message}`);
    //   }
    // } catch (error) {
    //   alert('Error: ' + error.message);
    // }
    setFormData({
        fullname: '',
        fathername: '',
        password: '',
        city: '',
        cnic: '',
        bloodgroup: '',
        email: '',
        phone: '',
        terms: false,
      })
  };

  return (
    <>
      <div className="container-fluid main">
        <div className="image-section">
          <img className='imgg' src="/images/image 27.png" alt="" />
        </div>
        <div className="form-section">
          <h1 className='sgn'>Sign Up</h1>
          <form className='fo' onSubmit={handleSubmit}>
            <div className="row">
              <div className="column">
                <label className='lb' htmlFor="fullname">Full Name</label>
                <input className='in' type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} />
              </div>
              <div className="column">
                <label className='lb' htmlFor="fathername">Father Name</label>
                <input className='in' type="text" id="fathername" name="fathername" value={formData.fathername} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label className='lb' htmlFor="password">Password</label>
                <input className='in' type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <div className="column">
                <label className='lb' htmlFor="city">City</label>
                <input className='in' type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label className='lb' htmlFor="cnic">CNIC</label>
                <input className='in' type="text" id="cnic" name="cnic" value={formData.cnic} onChange={handleChange} />
              </div>
              <div className="column">
                <label className='lb' htmlFor="bloodgroup">Blood Group</label>
                <input className='in' type="text" id="bloodgroup" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label className='lb' htmlFor="email">Email Address</label>
                <input className='in' type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label className='lb' htmlFor="phone">Phone Number</label>
                <input className='in' type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="checkbox-row">
              <input className='in' type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} />
              <label className='lb' htmlFor="terms">I am applying and agree to all <a href="#">terms and conditions</a></label>
            </div>
            <button type="submit" className="btn btn-danger rounded-pill">Create account</button>
          </form>
          <div className="alternative-signup">
            <div className="separator">
              <span>Or</span>
            </div>
            <div className="link">
              <a className="google-signup">Sign Up With Google</a>
              <a className="facebook-signup">Sign Up with Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
