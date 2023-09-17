import React from 'react'
import ImageSlider from '../Home/ImageSlider/ImageSlider'
import Info from '../Home/Info/Info'
import OurRooms from '../Home/OurRooms/OurRooms'
import Footer from '../Foot/Foot'


import './Home.css'
export default function Home() {
  return (
    <div className='home'>
    <ImageSlider/>
    <Info/>
    <OurRooms/>
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
  )
}
