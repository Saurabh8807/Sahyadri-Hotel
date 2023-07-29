import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Navbar/Navbar';
import './tableRequest.css';

export default function TableRequest() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedUserId, setExpandedUserId] = useState(null);

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
  }, []);

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

      <div className="card-container1">
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
                  <h3>{user.name}</h3>
                  <p>Room Number: {user.roomNumber}</p>
                  <p>Phone Number: {user.phoneNumber}</p>
                  <p>Guests: {user.guests}</p>
                  <p>Time: {user.time}</p>
                  <p>Items: {user.items}</p>
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
