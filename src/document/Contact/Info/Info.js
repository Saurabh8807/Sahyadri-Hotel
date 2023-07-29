import React,{useEffect }from 'react';
import './Info.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope,FaTrain,FaPlane } from 'react-icons/fa';
import divider from './divider.png'
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
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
    <>
        <h2 className='h2contact'>Contact Information</h2>
        <img className="divider7" src={divider} alt="" width="300vw" />

    <div className="contact-us">
      <div className="contact-column">
        <h3>
          <FaMapMarkerAlt /> Address
        </h3>
        <p>Sahyadri Hotel, 145 Marine Drive, next to Pizza by the Bay, Mumbai - 400020, Maharashtra, India.</p>
        {/* <p>City, State, Zip Code</p> */}
      </div>
      <div className="contact-column">
        <h3>
          <FaPhone /> Phone Numbers
        </h3>
        <p>Phone 1: (123) 456-7890</p>
        <p>Phone 2: (987) 654-3210</p>
      </div>
      <div className="contact-column">
        <h3>
          <FaEnvelope /> Emails
        </h3>
        <p>Email 1: info@example.com</p>
        <p>Email 2: support@example.com</p>
      </div>
    </div>
    <h2 id="h2Transport">How To Reach Us</h2>
        <img className="divider7" src={divider} alt="" width="300vw" />
    <div className="transportation-section">
        <div className="transportation-column">
          <h3>
            <FaPlane /> From The Airport
          </h3>
          <p>
            The easiest way to reach us from the airport is by taking a prepaid taxi. The journey will take 60-90
            minutes, depending on the time of the day. Guests are advised to only use prepaid taxis, which can be
            booked from the counter in the airport.
          </p>
        </div>
        <div className="transportation-column">
          <h3>
            <FaTrain /> By Train
          </h3>
          <p>
            The hotels are easily reached from most major railway stations. Churchgate station is a 5-minute walk
            away. Chhatrapati Shivaji Terminus (CST) is a short 10-minute drive away. Taxis are available outside all
            major stations.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
