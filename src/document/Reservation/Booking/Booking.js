import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';
import { FaTimes } from 'react-icons/fa'; // Import the cross symbol icon from react-icons library


export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [adults, setAdults] = useState("");
  const [childrens, setChildrens] = useState("");
  const [rooms, setRooms] = useState("");
  const [roomType, setRoomType] = useState("");
  const [showRooms, setShowRooms] = useState(false); // Add state to control whether to show the rooms or not
  const [availability, setAvailability] = useState([]);
  const [emptyRooms, setEmptyRooms] = useState([]);

  const collectData3 = async () => {
    const baseUrl = "http://localhost:5000/user/bookings";
    const data = {
      name,
      email,
      phone,
      address,
      date1,
      date2,
      adults,
      childrens,
      rooms,
      roomType
    };
    const result = await axios.post(baseUrl, data);
    console.log(result.data);
  };

  const checkAvailability = async () => {
    try {
      const response = await axios.get('/admin/rooms');
      const roomData = response.data;
  
      // Filter empty rooms
      const emptyRoomsData = roomData.filter(room => room.occupancy_status.trim() === 'Empty');
  
      // Assign rooms from emptyRoomsData
      const emptyRooms = emptyRoomsData.map((room, index) => {
        let roomNumber = room['id'];
        let assignedRoomType = room['assigned_room_type'];
        let occupancyStatus = room['occupancy_status'].replace(/\r/g, '');
  
        return {
          'Room Number': roomNumber,
          'Assigned Room Type': assignedRoomType,
          'occupancy_status':occupancyStatus
        };
      });
  
      setAvailability(roomData);
      setEmptyRooms(emptyRooms);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };
    return (
    <div className='bookingBoth'>
      <p className='gstText'>*GST will be added to the above.</p>
      <div className='bookingInfo'>
        <h5>Note:-</h5>
        <p className='booking-condition'>
          <br />
          ◉ Kids up to Six (5) years are complimentary in parent’s room without extra bed.<br />
          ◉ Child from 7 yrs to 12 yrs can stay in the same room with an additional cost of Rs 1000.<br />
          ◉ Extra person would be charged as per the above.<br />
          ◉ Standard check-in time is 12:00 Noon and check-out time is 10:00 Morning<br />
          ◉ Room tariff is on EP (Room Only) per day basis.
        </p>
        <h5 className='doc'>Document Required :-</h5>
        <p className="gov">
          <br />
          As per Government of India Regulations which is non-negotiable we need the following<br /> from each Guest in ORIGINAL on check-in time:<br />
          ◉ For foreigners - foreign passports or Indian Visa<br />
          ◉ For Indians - Aadhar-Card, Driving License, Pan-card
        </p>
      </div>
      <div className='bookingForm'>
      <form>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input placeholder='Enter Your Name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" required />
        <label for="name" class="form-label"></label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input placeholder='Enter Your Email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" size="30" required />
        <label for="email" class="form-label"></label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input placeholder='Enter Your Phone No.' type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" required />
        <label for="phone" class="form-label" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input placeholder='Enter Your Address' type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" required />
        <label for="address" class="form-label"></label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
          <input placeholder="Select date" type="date" id="date1" value={date1} onChange={(e) => setDate1(e.target.value)} class="form-control" required />
          <label for="date"></label>
          <i class="fas fa-calendar input-prefix"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
          <input placeholder="Select date" type="date" id="date2" value={date2} onChange={(e) => setDate2(e.target.value)} class="form-control" required />
          <label for="date2"></label>
          <i class="fas fa-calendar input-prefix"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <label class="visually-hidden" for="adults">How many adults?</label>
      <select class="select" value={adults} id="adults" onChange={(e) => setAdults(e.target.value)} required>
        <option value="question">How many adults?</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
        <option value="10">Ten</option>
      </select>
    </div>
    <div class="col">
      <label class="visually-hidden" for="children">How many children?</label>
      <select class="select" value={childrens} id="children" onChange={(e) => setChildrens(e.target.value)} required>
        <option value="question">How many Children?</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
        <option value="10">Ten</option>
      </select>
    </div>
    <div class="col">
      <label class="visually-hidden" for="rooms">How many rooms do you want?</label>
      <select class="select" value={rooms} id="rooms" onChange={(e) => setRooms(e.target.value)} required>
        <option value="question">How many rooms?</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
        <option value="10">Ten</option>
      </select>
    </div>
    <div class="col">
      <label class="visually-hidden" for="roomType">Room type?</label>
      <select class="select" id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
        <option value="question">Room type?</option>
        <option value="1">Deluxe</option>
        <option value="2">Super Deluxe</option>
        <option value="2">Lake Facing Room</option>
      </select>
    </div>
    <div class="col-12">
      <button onClick={collectData3} class="btn btn-primary Booked2" type="submit">Submit</button>
    </div>
    <div className="col-13">
  <button onClick={() => {
    setShowRooms(true);
    checkAvailability();
  }} className="btn btn-primary Checked" type="button">
    Check Availability
  </button>
</div>
  </div>
</form>

      </div>
      {/* <form>
  <div className="col-13">
    <button onClick={() => setShowRooms(true)} className="btn btn-primary Checked" type="button">
      Check Availability
    </button>
  </div>
</form> */}

{/* Display empty rooms */}
{showRooms && (
  <div>
    <FaTimes className="close-icon3" onClick={() => setShowRooms(false)} /> {/* Cross symbol with close functionality */}
    <div className="room-container">
      {emptyRooms.map((room, index) => (
        <div className="room-box" key={index}>
          <p className="room-number">Room Number: {room['Room Number']}</p>
          <p className="assigned-room-type">
            Room Type:<br/> <span className="highlight">{room['Assigned Room Type']}</span>
          </p>
          <p className="occupancy-status">
            <span className="status-text">Status:<br/> </span>
            <span className={`available-text ${room['occupancy_status'] === 'Empty' ? 'available' : ''}`}>
              {room['occupancy_status'] === 'Empty' ? 'Available' : room['occupancy_status']}
            </span>
          </p>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
  );
}
