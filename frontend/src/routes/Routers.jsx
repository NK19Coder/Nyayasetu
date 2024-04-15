import React from 'react'
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Contact from '../pages/Contact.jsx';
import Lawyers from '../pages/Lawyers/Lawyers.jsx';
import LawyerDetails from '../pages/Lawyers/LawyerDetails.jsx';
import Form from '../pages/Form.jsx';

import {Routes, Route} from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/lawyers' element={<Lawyers/>}/>
    <Route path='/lawyers/:id' element={<LawyerDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/form' element={<Form/>}/>
  </Routes>
}

export default Routers;
