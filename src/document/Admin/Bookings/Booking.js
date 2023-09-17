import React, { useEffect, useState }  from 'react'
import AdminNavbar from '../Navbar/Navbar';
import './Booking.css'
import { useNavigate } from 'react-router-dom';
import Arrow from '@material-ui/icons/ArrowUpward';



export default function Booking() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://sahyadri-backend.onrender.com/user/bookings')
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
    fetch(`https://sahyadri-backend.onrender.com/user/bookings/${userId}`, {  // Update the endpoint URL
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
                  <h3 style={{color:"black",fontSize:"23px",fontWeight:"bolder",marginLeft:"-0.4vw",fontFamily:"initial",textAlign:"center"}}>{user.name}</h3>
                  <p><span className="highlight5">Phone Number: </span><span className="highlight6">{user.phone}</span></p>
                  <p><span className="highlight5">Email: </span><span className="highlight6">{user.email}</span></p>
                  <p><span className="highlight5">Address: </span><span className="highlight6">{user.address}</span></p>
                  <p><span className="highlight5">Check-In Date: </span><span className="highlight6">{user.date1}</span></p>
                  <p><span className="highlight5">Check-Out Date: </span><span className="highlight6">{user.date2}</span></p>
                  <p><span className="highlight5">Adults: </span><span className="highlight6">{user.adults}</span></p>
                  <p><span className="highlight5">Childrens: </span><span className="highlight6">{user.childrens}</span></p>
                  <p><span className="highlight5">Requested Rooms: </span><span className="highlight6">{user.rooms}</span></p>
                  <p><span className="highlight5">Requested Room Type: </span><span className="highlight6">{user.roomType}</span></p>
                  <button style={{marginLeft:"7vw"}}
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
