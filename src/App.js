import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './document/Navbar/Navbar';
import Home from './document/Home/Home';
import About from './document/About/About';
import Reservation from './document/Reservation/Reservation';
import Photos from './document/Photos/Photos';
import Restaurant from './document/Restaurant/Restaurant';
import Contact from './document/Contact/Contact';
// import Booking from './document/Booking/Booking';
import Foot from './document/Foot/Foot';
import Payment from './document/Payment/Payment';
import SignIn from './document/SignIn/SignIn';
import SignUp from './document/SignUp/SignUp';
import AdminDashboard from './document/Admin/adminDashboard';
import Users from './document/Admin/Users/Users';
import Rooms from './document/Admin/Rooms/Rooms';
import Booking from './document/Admin/Bookings/Booking';
import RoomDetails from './document/Admin/Rooms/Roomdetails';
import TableRequest from './document/Admin/Tables/tableRequest';
// import TableRequest from '../../server/db/tableRequest';
// import RoomDetails from './document/Admin/Booking/Roomdetails'
// import PrivateRoute from './document/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <>
      <Router>
        {/* Redirect to home page */}
        <Routes>
          <Route path="/" element={<Navigate to="/user/home" />} />
          {/* ...existing routes... */}
        </Routes>
        {/* User routes */}
        <Routes>
          <Route path="/*" element={(
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <Routes>
                <Route path="/user/home" element={<Home />} />
                <Route path="/user/about" element={<About />} />
                <Route path="/user/reservation" element={<Reservation />} />
                <Route path="/user/photos" element={<Photos />} />
                <Route path="/user/restaurant" element={<Restaurant />} />
                <Route path="/user/contact" element={<Contact />} />
                {/* <Route path="/booking" element={<Booking />} /> */}
                <Route path="/payment" element={<Payment />} />
                <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
                </Routes>
            </>
          )} />
          
          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/rooms" element={<Rooms />} />
          <Route path="/admin/rooms/:roomNumber" element={<RoomDetails />} />
          <Route path="/admin/bookings" element={<Booking />} />
          <Route path="/admin/tableRequest" element={<TableRequest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
