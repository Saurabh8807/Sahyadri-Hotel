import React, { useEffect } from 'react';
import ImagesliderAbout from './ImagesliderAbout/ImagesliderAbout';
import InfoAbout from './InfoAbout/InfoAbout';
import { useNavigate } from 'react-router-dom';
import './About.css'
import Footer from '../Foot/Foot'



const About = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       navigate('/SignIn');
  //     }
  //   };

  //   checkAuthentication();
  // }, [navigate]);

  return (
    <div className='about'>
      <ImagesliderAbout />
      <InfoAbout />
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
                    <h1 style={{color:"white"}}>↑</h1>
                </button>

    </div>
  );
};

export default About;
