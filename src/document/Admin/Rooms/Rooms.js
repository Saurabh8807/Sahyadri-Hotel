import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Navbar/Navbar';
import axios from 'axios';
import './Rooms.css';

function Booking() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/SignIn');
      }
    };

    checkAuthentication();
  }, [navigate]);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('https://sahyadri-backend.onrender.com/admin/rooms');
      const roomData = response.data;

      // Assign rooms from roomData
      const rooms = roomData.map((room, index) => {
        const roomNumber = index + 1;
        let occupancyStatus = room['occupancy_status'].replace(/\r/g, '');
        let assignedRoomType = room['assigned_room_type'];

        return {
          'Room Number': roomNumber,
          'Occupancy Status': occupancyStatus,
          'Assigned Room Type': assignedRoomType
        };
      });

      setRooms(rooms);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setIsLoading(false);
    }
  };

  const handleRoomClick = (roomNumber) => {
    navigate(`/admin/rooms/${roomNumber}`);
  };

  const getRoomStatusColor = (room) => {
    return room && room['Occupancy Status'] === 'Empty' ? 'green' : 'red';
  };

  return (
    <div className="roomsBack">
      <AdminNavbar />
      <h2>Rooms</h2>
      <div className="rooms-container">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="room-box"
            style={{ backgroundColor: getRoomStatusColor(room) }}
            onClick={() => handleRoomClick(room['Room Number'])}
          >
            <p>Room Number: {room['Room Number']}</p>
            <p>Occupancy Status: {room['Occupancy Status']}</p>
            <p>Room Type:<br/>{room['Assigned Room Type']}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
