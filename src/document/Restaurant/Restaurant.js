import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RestoImgSlider from './RestoImgSlider/RestoImgSlider'
import RestoInfo from './RestoInfo/RestoInfo'
import RestoInfo2 from './RestoInfo2/RestoInfo2'
import BookTable from './BookTable/BookTable'
import Footer from '../Foot/Foot'
import Arrow from '@material-ui/icons/ArrowUpward';

import './Restaurant.css'

export default function Restaurant() {
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
    <div className='restaurant'>
      <RestoImgSlider/>
      <RestoInfo/>
      <RestoInfo2/>
      <BookTable/>
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
