import React, { useEffect } from 'react';
import ImagesliderAbout from './ImagesliderAbout/ImagesliderAbout';
import InfoAbout from './InfoAbout/InfoAbout';
import { useNavigate } from 'react-router-dom';
import './About.css'
import Footer from '../Foot/Foot'


const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/SignIn');
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <div className='about'>
      <ImagesliderAbout />
      <InfoAbout />
      <Footer/>

    </div>
  );
};

export default About;
