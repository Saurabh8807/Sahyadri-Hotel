import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './tableRequest.css';

export default function TableRequest() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/user/tableRequest')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      });
      const checkAuthentication = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/SignIn');
        }
      };
  
      checkAuthentication();
  }, [navigate]);
  const handleDelete = (userId) => {
    fetch(`https://sahyadri-backend.onrender.com/user/tableRequest/${userId}`, {  // Update the endpoint URL
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUsers(users.filter(user => user._id !== userId));
        } else {
          console.error('Error deleting user:', data.error);
        }
      })
      .catch(error => console.error('Error deleting user:', error));
  };
  
  const handleUserClick = userId => {
    if (expandedUserId === userId) {
      setExpandedUserId(null);
    } else {
      setExpandedUserId(userId);
    }
  };

  const handleCloseClick = () => {
    setExpandedUserId(null);
  };

  return (
    <div>
      <AdminNavbar />

      <div className="card-container2">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          users.map(user => {
            const isExpanded = user._id === expandedUserId;
            return (
              <React.Fragment key={user._id}>
                <div
                  className={`tables ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleUserClick(user._id)}
                >
                  <h3 id='tableName'style={{color:"black",fontSize:"23px",fontWeight:"bolder",marginLeft:"-0.4vw",fontFamily:"initial"}}>{user.name}</h3>
                  <p id='roomNumber'><span className="highlight5">Room Number: </span><span className="highlight6">{user.roomNumber}</span></p>
                  <p  id='phoneNumber'><span className="highlight5">Phone Number: </span><span className="highlight6"> {user.phoneNumber}</span></p>
                  <p id='guests'><span className="highlight5">Guests: </span><span className="highlight6">{user.guests}</span></p>
                  <p id='time'><span className="highlight5">Time: </span><span className="highlight6">{user.time}</span></p>
                  <p id='items'><span className="highlight5">Items </span> <span className="highlight6">{user.items}</span></p>
                  <button style={{marginLeft:"6rem"}}
                          className="delete-button"
                          onClick={() => handleDelete(user._id)
                          }
                        >
                          Delete
                        </button>
                  {isExpanded && (
                    <div className="close-button" onClick={handleCloseClick}>
                      X
                    </div>
                  )}
                </div>

                {isExpanded && <div className="blur-effect" />}
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
}
