import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Users.css';
import loadingGif from './yy3.gif';
import Arrow from '@material-ui/icons/ArrowUpward';


function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://sahyadri-backend.onrender.com/admin/users')
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
    fetch(`https://sahyadri-backend.onrender.com/admin/users/${userId}`, {
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

  return (
    <>
      <AdminNavbar />
      {isLoading ? (
        <div className="loading-container">
          <img height={100} src={loadingGif} alt="Loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="users-background">
          <div className="admin-page">
            <h2>Admin Page</h2>
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      )}
    </>
  );
}

export default App;
