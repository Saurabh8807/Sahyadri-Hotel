import React from 'react';
import MapComponent from './Map/Map';
import Info from './Info/Info';
import Foot from '../Foot/Foot';
import './Contact.css';
import Arrow from '@material-ui/icons/ArrowUpward';



export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <MapComponent/>
      <Info/>
      <Foot/>
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
  );
}
