import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AdminNavbar from '../Navbar/Navbar';
import axios from 'axios';
import './Roomdetails.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function RoomDetails() {
  const { roomNumber } = useParams();
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchRoomData();
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/SignIn');
      }
    };

    checkAuthentication();
  }, [navigate]);

  useEffect(() => {
    setEditableData(roomData);
  }, [roomData]);

  const fetchRoomData = async () => {
    try {
      const response = await axios.get(`https://sahyadri-backend.onrender.com/admin/rooms/${roomNumber}`);
      setRoomData(response.data);
    } catch (error) {
      console.error('Error fetching room data:', error);
    }
  };

  const handleEditChange = (field, value) => {
    setEditableData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSaveClick = () => {
    axios
      .put(`https://sahyadri-backend.onrender.com/admin/rooms/${roomNumber}`, editableData)
      .then((response) => {
        setRoomData(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating room data:', error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };



  if (!roomData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="room-details-container">
      <Link to="/admin/rooms" className="back-link">
          <FaArrowLeft className="back-arrow" />
        </Link>
        <h2>Room Details</h2>
        <div className="room-details">
          <div className="row">
            <div className="label">Room Number:</div>
            <div className="value">{roomData['No']}</div>
          </div>
          <div className="row">
            <div className="label">Names:</div>
            {isEditing ? (
              <input
                type="text"
                value={editableData['Names']}
                onChange={e => handleEditChange('Names', e.target.value)}
              />
            ) : (
              <div className="value">{roomData['Names']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Arrival Year :</div>
            {isEditing ? (
            <>
              <input
                type="text"
                value={editableData['arrival_date_year']}
                onChange={e => handleEditChange('arrival_date_year', e.target.value)}
              />
              {editableData['arrival_date_year'] === '' || isNaN(editableData['arrival_date_year']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
            </>
            ) : (
              <div className="value">{roomData['arrival_date_year']}</div>
            )}

          </div>
          <div className="row">
            <div className="label">Arrival Month :</div>
            {isEditing ? (
              
              <input
                type="text"
                value={editableData['arrival_date_month']}
                onChange={e => handleEditChange('arrival_date_month', e.target.value)}
              />
              
            ) : (
              <div className="value">{roomData['arrival_date_month']}</div>
            )}

          </div>
          <div className="row">
            <div className="label">Arrival Date :</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['arrival_date_day_of_month']}
                onChange={e => handleEditChange('arrival_date_day_of_month', e.target.value)}
              />
              {editableData['arrival_date_day_of_month'] === '' || isNaN(editableData['arrival_date_day_of_month']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['arrival_date_day_of_month']}</div>
            )}

          </div>
          <div className="row">
            <div className="label">Stays in Weekend Nights:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['stays_in_weekend_nights']}
                onChange={e => handleEditChange('stays_in_weekend_nights', e.target.value)}
              />
              {editableData['stays_in_weekend_nights'] === '' || isNaN(editableData['stays_in_weekend_nights']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['stays_in_weekend_nights']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Adults:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['adults']}
                onChange={e => handleEditChange('adults', e.target.value)}
              />
              {editableData['adults'] === '' || isNaN(editableData['adults']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['adults']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Children:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['children']}
                onChange={e => handleEditChange('children', e.target.value)}
              />
              {editableData['children'] === '' || isNaN(editableData['children']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}

              </>
            ) : (
              <div className="value">{roomData['children']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Country:</div>
            {isEditing ? (
              <input
                type="text"
                value={editableData['country']}
                onChange={e => handleEditChange('country', e.target.value)}
              />
            ) : (
              <div className="value">{roomData['country']}</div>
            )}
            </div>
          <div className="row">
            <div className="label">Booking Type:</div>
            {isEditing ? (
              <input
                type="text"
                value={editableData['Booking_Type']}
                onChange={e => handleEditChange('Booking_Type', e.target.value)}
              />
            ) : (
              <div className="value">{roomData['Booking_Type']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Room Type:</div>
            {isEditing ? (
              <input
                type="text"
                value={editableData['assigned_room_type']}
                onChange={e => handleEditChange('assigned_room_type', e.target.value)}
              />
            ) : (
              <div className="value">{roomData['assigned_room_type']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Days in Waiting List:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['days_in_waiting_list']}
                onChange={e => handleEditChange('days_in_waiting_list', e.target.value)}
              />
              {editableData['days_in_waiting_list'] === '' || isNaN(editableData['days_in_waiting_list']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['days_in_waiting_list']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Bill Amount:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['billAmount']}
                onChange={e => handleEditChange('billAmount', e.target.value)}
              />
              {editableData['billAmount'] === '' || isNaN(editableData['billAmount']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['billAmount']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Required Car Parking Spaces:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['required_car_parking_spaces']}
                onChange={e => handleEditChange('required_car_parking_spaces', e.target.value)}
              />
              {editableData['required_car_parking_spaces'] === '' || isNaN(editableData['required_car_parking_spaces']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['required_car_parking_spaces']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Total of Special Requests:</div>
            {isEditing ? (
              <>
              <input
                type="text"
                value={editableData['total_of_special_requests']}
                onChange={e => handleEditChange('total_of_special_requests', e.target.value)}
              />
              {editableData['total_of_special_requests'] === '' || isNaN(editableData['total_of_special_requests']) ? (
                <p className="suggestion">Please enter a numeric value or 0.</p>
              ) : null}
              </>
            ) : (
              <div className="value">{roomData['total_of_special_requests']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Guest:</div>
            {isEditing ? (
              <input
                type="text"
                value={editableData['Guest']}
                onChange={e => handleEditChange('Guest', e.target.value)}
              />
            ) : (
              <div className="value">{roomData['Guest']}</div>
            )}
          </div>
          <div className="row">
            <div className="label">Occupancy Status:</div>
            {isEditing ? (
              <input
                type="text"
                value={editableData["occupancy_status"]}
                onChange={e => handleEditChange("occupancy_status", e.target.value)}
              />
            ) : (
              <div className="value">{roomData["occupancy_status"]}</div>
            )}
          </div>
          <div className="actions">
            <button className='btn' id='edBtn'onClick={handleEditClick}>Edit</button>
            <button className='btn' id="svBtn"onClick={handleSaveClick}>Save</button>      
            </div>
          {/* Display other room details */}
        </div>
      </div>
    </>
  );
}

export default RoomDetails;
