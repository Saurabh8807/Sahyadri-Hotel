import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSliderRserve from '../Reservation/ImageSliderRserve/ImageSliderRserve'
import Roomsize from './Roomsize/Roomsize'
import Booking from './Booking/Booking'
import Footer from '../Foot/Foot'

import './Reservation.css'

export default function reservation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className='reservation12'>
      <ImageSliderRserve/>
      <Roomsize/>
      <Booking/>
      <Footer/>
    </div>
  )
}
