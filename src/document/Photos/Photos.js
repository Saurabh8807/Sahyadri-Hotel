import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './imgSlider_photos/ImageSliderPhotos'
import LakeViewPhoto from './Lake_view_deluxe/LakeViewPhoto'
import SuperRoomPhoto from './Super_deluxe/SuperDeluxe'
import DeluxeRoomPhoto from './Deluxe/Deluxe'
import Hotel_img from './Hotel_img/Hotel_img'
import Footer from '../Foot/Foot'

import './Photos.css'

export default function Photos() {
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
    <div className=' photos2'>
      <Img/>
      <LakeViewPhoto/>
      <SuperRoomPhoto/>
      <DeluxeRoomPhoto/>
      <Hotel_img/>
      <Footer/>

    </div>
  )
}
