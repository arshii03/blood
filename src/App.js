import React from 'react';
import { Routes, Route, Link,  } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Task from './Components/Home/task';
import Donars from './Components/donars/Donars'
import Request from './Components/request/Request';
import Navbar from './Components/Navbar/Navbar';
import Join from './Components/joinus/Join';
import About from './Components/About/About';
import Footer from './Components/footer/Footer';









function App() {




  return (
    <>
  
   
    <Navbar/>
   <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/donars" element={<Donars />} />
        <Route path="/task" element={<Task/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/joinus" element={<Join/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
      <Footer/>
    </>

  );
}

export default App;
