import React from 'react';
import './InfoAbout.css';
import Image from './Image.jpg';
import { useSpring, animated } from "react-spring";

import Ac from './logos/ac.png';
import Parking from './logos/parking.png';
import FamilyRooms from './logos/familyRoom.png';
import Wifi from './logos/wifi.png';
import NoSmoking from './logos/noSmoking.png';
import Breakfast from './logos/breakfast.png';
import hrs from './logos/24hrs.png';
import Coffee from './logos/coffee.png';
import Balcony from './logos/balcony.png';
import Sea from './logos/sea.png';
import Cable from './logos/cable.png';
import Living from './logos/living.png';
import Socket from './logos/socket.png';
import TV from './logos/tv.png';
import Luggage from './logos/luggage.png';
import Phone from './logos/phone.png';
import Alarm from './logos/alarm.png';
import Currency from './logos/currency.png';
import Sattelite from './logos/satellite.png';
import Accessiblity from './logos/accessibility.png';
import Security from './logos/security.png';
import Laundry from './logos/laundry.png';
import Marbel from './logos/marbel.png';
import Staff from './logos/staff.png';
import { useNavigate } from 'react-router-dom';
import divider from './divider.png';

export default function InfoAbout() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/user/reservation`;
    navigate(path);
  };
 const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideInProps = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    config: { duration: 800, delay: 200 },
  });
  const slideOutProps = useSpring({
    from: { transform: "translateX(100%)" }, // Slide in from the right
    to: { transform: "translateX(0)" },      // Slide to the original position
    config: { duration: 800, delay: 200 },
  
  });

  const fadeInUpProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 200 },
  });

  const fadeDownProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 200 },
  });

  return (
    <div className='aboutHotel'>
      <br />
        <animated.h3 className='h3Info' style={fadeInProps}>About Sahyadri  In Mumbai</animated.h3>
      <img className='aboutDivider' src={divider} alt='' width='330vw' height='90vh' />
        <animated.h5 className='h5Info' style={fadeDownProps}>Welcome to Sahyadri  – Budget Homestay in Mumbai</animated.h5>
      <br />
      <div className='Info'>
          <animated.p className='pInfo' style={fadeDownProps}>
            Tourists who travel and reach faraway places always find it hard to get accustomed to the culture of distinct places. Living along
            with the natives, in their own houses and environment, helps travelers to know the lifestyle, language, cuisines, religion, and
            every aspect of the local culture, in the best way possible.
          </animated.p>
      </div>
      <div className='both1'>
          <animated.div className='info1' style={slideInProps}>
            <p>
              Sahyadri Mumbai provides you with Quality accommodation ideal for leisure and business travelers. Sahyadri is the captivating
              leisure destination in itself, offering a myriad of services and facilities to experience our truly enriching surroundings. If
              you are planning a visit to the city of lakes Mumbai then it is one of the most prominent homestays in Mumbai for your comfortable
              stay. To pamper the guests with ultimate comfort, luxury, and pleasure, We offer multifarious services. Sahyadri is one of the best
              homestay in Mumbai with a rooftop restaurant & Swimming Pool near Lake.
            </p>
          </animated.div>
          <animated.div className='img' style={slideOutProps}>
            <img className='Image' src={Image} alt=''width='500vw' />
          </animated.div>
      </div>
      <br />
        <animated.h2  style={fadeInProps}className='facilitiestxt'>Facilities</animated.h2>
      <br />
        <animated.img className='aboutDivider' style={fadeDownProps} src={divider} alt='' width='330vw' height='90vh' />
      
      
        <animated.p
          style={{
            width: '89vw',
            textAlign: 'center',
            marginLeft: '8vw',
            height: '15vh',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)',
            fontSize: 18.4,
            fontWeight: 400,
            ...fadeInProps
          }}
        >
          Our hotel offers a range of modern amenities including air conditioning, free Wi-Fi, and 24-hour reception, ensuring a comfortable and
          convenient stay for our guests. Additionally, guests can enjoy the beautiful sea view from private balconies, adding an extra touch of
          relaxation to their experience.
        </animated.p>
      <div className='facilities-section'>
          <h2 style={{ marginLeft: '3vw' }}>OUR AMENITIES</h2>
        <div className='facility-list'>
            <div className='facility'>
              <img src={Ac} alt='Air Conditioning' height={30} width={60} />
              <p>Air Conditioning</p>
            </div>
            <div className='facility'>
              <img src={Parking} alt='Free Parking' height={40} />
              <p>
                Free Parking
                <br />
                (subject to availability)
              </p>
            </div>
            <div className='facility'>
              <img src={FamilyRooms} alt='Family Rooms' height={45} />
              <p>Family Rooms</p>
            </div>
            <div className='facility'>
              <img src={Wifi} alt='Free Wifi' height={45} />
              <p>Free Wifi</p>
            </div>
            <div className='facility'>
              <img src={NoSmoking} alt='Free Wifi' height={45} />
              <p>Non-smoking rooms</p>
            </div>
            <div className='facility'>
              <img src={hrs} alt='Free Wifi' height={45} />
              <p>24 Hour Reception</p>
            </div>
            <div className='facility'>
              <img src={Coffee} alt='Free Wifi' height={65} />
              <p>Tea/coffee maker</p>
            </div>
            <div className='facility'>
              <img src={Breakfast} alt='Free Wifi' />
              <p>Room Service Breakfast</p>
            </div>
            <div className='facility'>
              <img src={Sea} alt='Free Wifi' height={55} />
              <p>Sea view</p>
            </div>
            <div className='facility'>
              <img class='facimg' src={Balcony} alt='Free Wifi' height={75} width={40} />
              <p>Private Balcony</p>
            </div>
            <div className='facility'>
              <img src={Socket} alt='Free Wifi' height={55} />
              <p>Socket near the bed</p>
            </div>
            <div className='facility'>
              <img src={Living} alt='Free Wifi' height={55} />
              <p>Living area</p>
            </div>
            <div className='facility'>
              <img src={TV} alt='Free Wifi' height={45} />
              <p>Flat-screen TV</p>
            </div>
            <div className='facility'>
              <img src={Cable} alt='Free Wifi' height={55} />
              <p>Cable channels</p>
            </div>
            <div className='facility'>
              <img src={Sattelite} alt='Free Wifi' height={45} />
              <p>Satellite channels</p>
            </div>
            <div className='facility'>
              <img src={Phone} alt='Free Wifi' height={50} />
              <p>Telephone</p>
            </div>
            <div className='facility'>
              <img src={Luggage} alt='Free Wifi' height={55} />
              <p>Luggage Storage</p>
            </div>
            <div className='facility'>
              <img src={Alarm} alt='Free Wifi' height={55} />
              <p>Wake-up service</p>
            </div>
            <div className='facility'>
              <img src={Currency} alt='Free Wifi' height={55} />
              <p>Currency exchange</p>
            </div>
            <div className='facility'>
              <img src={Security} alt='Free Wifi' height={65} />
              <p>24 Hour Security</p>
            </div>
            <div className='facility'>
              <img src={Marbel} alt='Free Wifi' height={55} />
              <p>Tile/marble floor</p>
            </div>
            <div className='facility'>
              <img src={Staff} alt='Free Wifi' height={55} />
              <p>Multilingual Staff</p>
            </div>
            <div className='facility'>
              <img src={Accessiblity} alt='Free Wifi' height={55} />
              <p>Accessibility</p>
            </div>
            <div className='facility'>
              <img src={Laundry} alt='Free Wifi' height={75} />
              <p>Laundry Service</p>
            </div>
        </div>
      </div>
      <button type='button' id='booknow2' onClick={routeChange} class='btn btn-primary'>
        Book Now
      </button>
    </div>
  );
}
