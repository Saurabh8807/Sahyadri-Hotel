import React from 'react';
import MapComponent from './Map/Map';
import Info from './Info/Info';
import Foot from '../Foot/Foot';
import './Contact.css'


export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <MapComponent/>
      <Info/>
      <Foot/>
    </div>
  );
}
