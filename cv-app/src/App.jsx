import React,{useState} from 'react';
import html2pdf from 'html2pdf.js';
import {Header, HeaderRender} from './components/Header'
import { EducationSet,EducationGet } from './components/Education';
import { ExperienceSet,ExperienceGet } from './components/Experience';
import Footer from './components/Footer';
import './App.css'


function App() {
  const [data, setData] = useState({
    contactNo: "",
    email: "",
    linkedIn: "",
    fullName: "",
    education:"",
    experience:"",
  });

  function handleInputChange(event) {
    const {name, value}= event.target;
    setData({
      ...data,
      [name]: value,
    }); 
  }
   
    const generatePDF=()=>{
      const element= document.getElementById("content")
      html2pdf(element)
    }
   
  
  return (
    <>
    <div className='app-content'>

<div ><Header handleInputChange={handleInputChange} data={data}/>
  <EducationSet handleInputChange={handleInputChange} data={data}/>
  <ExperienceSet handleInputChange={handleInputChange} data={data}/>
  </div>

  
  <div className='all-content'>
  <div className='CV-head'>
  <h2>Your CV</h2>
  </div>
  <div className='border'>
  <div id='content'>
  <HeaderRender data={data}/>
  <EducationGet data={data}/>
  <ExperienceGet data={data}/>
  </div>
  </div>
  <div className='download-btn'>
  <button className='download' onClick={generatePDF}>Download CV</button>
  </div>
  
  </div>
  
  
   <Footer/>
</div>
    
    
    </>
  )
}

export default App;
