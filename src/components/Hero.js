import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroimage from '../assets/hero.svg';
import '../styles/Hero.css';

const Hero = () => {
  const navigation = useNavigate();
  return (
    <div className='container my-5'>
        <div className='d-lg-flex justify-content-between '>
            <div className='hero-context'>
              <h1 className='hero-manage'>Manage your Tasks on <br /> <span className='hero-task'>TaskDuty</span></h1>
              <p className='hero-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan. </p>
              <button className='text-white btn hero-button' onClick={()=>{navigation('/Alltask')}}>
                {/* <Link to='/Alltask' className='text-decoration-none text-white'> */}
                 Go To My Tasks
                {/* </Link> */}
              </button>
            </div>
            <div className='hero-image'>
                {/* <img src={heroimage} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Hero