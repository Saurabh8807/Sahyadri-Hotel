import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RestoImgSlider from './RestoImgSlider/RestoImgSlider'
import RestoInfo from './RestoInfo/RestoInfo'
import RestoInfo2 from './RestoInfo2/RestoInfo2'
import BookTable from './BookTable/BookTable'
import Footer from '../Foot/Foot'

import './Restaurant.css'

export default function Restaurant() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // User is not authenticated, navigate to sign-in page
        navigate('/SignIn');
      }
    };

    checkAuthentication();
  }, [navigate]);
  return (
    <div className='restaurant'>
      <RestoImgSlider/>
      <RestoInfo/>
      <RestoInfo2/>
      <BookTable/>
      <Footer/>

    </div>
  )
}
