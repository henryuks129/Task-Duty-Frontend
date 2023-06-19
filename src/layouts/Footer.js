import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const toTop = ()=>{
    window.scrollTo({
      top: 80,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <div className='mb-4 text-center'>
        <h4 onClick={toTop} className='to-top text-center'>Back To Top</h4>
        </div>
    </div>
  ) 
}

export default Footer