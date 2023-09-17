import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './imgSlider_photos/ImageSliderPhotos'
import LakeViewPhoto from './Lake_view_deluxe/LakeViewPhoto'
import SuperRoomPhoto from './Super_deluxe/SuperDeluxe'
import DeluxeRoomPhoto from './Deluxe/Deluxe'
import Hotel_img from './Hotel_img/Hotel_img'
import Footer from '../Foot/Foot'
import Arrow from '@material-ui/icons/ArrowUpward';


import './Photos.css'

export default function Photos() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       // User is not authenticated, navigate to sign-in page
  //       navigate('/SignIn');
  //     }
  //   };

  //   checkAuthentication();
  // }, [navigate]);
  return (
    <div className=' photos2'>
      <Img/>
      <LakeViewPhoto/>
      <SuperRoomPhoto/>
      <DeluxeRoomPhoto/>
      <Hotel_img/>
      <Footer/>
      <button id="myBtn" 
                    onClick={() => {
                        let mybutton = document.getElementById("myBtn");
                        function scrollFunction() {
                            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                                mybutton.style.display = "block";
                            } else {
                                mybutton.style.display = "none";
                            }
                        }
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                        window.onscroll = function () { scrollFunction() };
                    }}
                    style={{
                        position: 'fixed',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: "#3f51b5",
                        color: '#fff',
                        textAlign: 'center',
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                    }}>
                    <Arrow fontSize='medium' />
                </button>

    </div>
  )
}
