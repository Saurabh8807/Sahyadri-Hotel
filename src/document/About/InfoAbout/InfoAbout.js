import React from 'react';
import './InfoAbout.css';
import Image from './Image.jpg';
import { Fade, Zoom } from 'react-reveal';
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

  return (
    <div className='aboutHotel'>
      <br />
      <Zoom bottom>
        <h3 className='h3Info'>About Sahyadri  In Mumbai</h3>
      </Zoom>
      <img className='aboutDivider' src={divider} alt='' width='330vw' height='90vh' />
      <Fade bottom>
        <h5 className='h5Info'>Welcome to Sahyadri  – Budget Homestay in Mumbai</h5>
      </Fade>
      <br />
      <div className='Info'>
        <Fade bottom>
          <p className='pInfo'>
            Tourists who travel and reach faraway places always find it hard to get accustomed to the culture of distinct places. Living along
            with the natives, in their own houses and environment, helps travelers to know the lifestyle, language, cuisines, religion, and
            every aspect of the local culture, in the best way possible.
          </p>
        </Fade>
      </div>
      <div className='both1'>
        <Fade left>
          <div className='info1'>
            <p>
              Sahyadri Mumbai provides you with Quality accommodation ideal for leisure and business travelers. Sahyadri is the captivating
              leisure destination in itself, offering a myriad of services and facilities to experience our truly enriching surroundings. If
              you are planning a visit to the city of lakes Mumbai then it is one of the most prominent homestays in Mumbai for your comfortable
              stay. To pamper the guests with ultimate comfort, luxury, and pleasure, We offer multifarious services. Sahyadri is one of the best
              homestay in Mumbai with a rooftop restaurant & Swimming Pool near Lake.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className='img'>
            <img className='Image' src={Image} alt=''width='500vw' />
          </div>
        </Fade>
      </div>
      <br />
      <Fade bottom>
        <h2 className='facilitiestxt'>Facilities</h2>
      </Fade>
      <br />
      <Fade bottom>
        <img className='aboutDivider' src={divider} alt='' width='330vw' height='90vh' />
      </Fade>
      <Fade bottom>
        <p
          style={{
            width: '89vw',
            textAlign: 'center',
            marginLeft: '8vw',
            height: '15vh',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)',
            fontSize: 18.4,
            fontWeight: 400,
          }}
        >
          Our hotel offers a range of modern amenities including air conditioning, free Wi-Fi, and 24-hour reception, ensuring a comfortable and
          convenient stay for our guests. Additionally, guests can enjoy the beautiful sea view from private balconies, adding an extra touch of
          relaxation to their experience.
        </p>
      </Fade>
      <div className='facilities-section'>
        <Fade bottom>
          <h2 style={{ marginLeft: '3vw' }}>OUR AMENITIES</h2>
        </Fade>
        <div className='facility-list'>
          <Fade bottom>
            <div className='facility'>
              <img src={Ac} alt='Air Conditioning' height={30} width={60} />
              <p>Air Conditioning</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Parking} alt='Free Parking' height={40} />
              <p>
                Free Parking
                <br />
                (subject to availability)
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={FamilyRooms} alt='Family Rooms' height={45} />
              <p>Family Rooms</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Wifi} alt='Free Wifi' height={45} />
              <p>Free Wifi</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={NoSmoking} alt='Free Wifi' height={45} />
              <p>Non-smoking rooms</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={hrs} alt='Free Wifi' height={45} />
              <p>24 Hour Reception</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Coffee} alt='Free Wifi' height={65} />
              <p>Tea/coffee maker</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Breakfast} alt='Free Wifi' />
              <p>Room Service Breakfast</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Sea} alt='Free Wifi' height={55} />
              <p>Sea view</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img class='facimg' src={Balcony} alt='Free Wifi' height={75} width={40} />
              <p>Private Balcony</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Socket} alt='Free Wifi' height={55} />
              <p>Socket near the bed</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Living} alt='Free Wifi' height={55} />
              <p>Living area</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={TV} alt='Free Wifi' height={45} />
              <p>Flat-screen TV</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Cable} alt='Free Wifi' height={55} />
              <p>Cable channels</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Sattelite} alt='Free Wifi' height={45} />
              <p>Satellite channels</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Phone} alt='Free Wifi' height={50} />
              <p>Telephone</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Luggage} alt='Free Wifi' height={55} />
              <p>Luggage Storage</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Alarm} alt='Free Wifi' height={55} />
              <p>Wake-up service</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Currency} alt='Free Wifi' height={55} />
              <p>Currency exchange</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Security} alt='Free Wifi' height={65} />
              <p>24 Hour Security</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Marbel} alt='Free Wifi' height={55} />
              <p>Tile/marble floor</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Staff} alt='Free Wifi' height={55} />
              <p>Multilingual Staff</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Accessiblity} alt='Free Wifi' height={55} />
              <p>Accessibility</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='facility'>
              <img src={Laundry} alt='Free Wifi' height={75} />
              <p>Laundry Service</p>
            </div>
          </Fade>
        </div>
      </div>
      <button type='button' id='booknow2' onClick={routeChange} class='btn btn-primary'>
        Book Now
      </button>
    </div>
  );
}
