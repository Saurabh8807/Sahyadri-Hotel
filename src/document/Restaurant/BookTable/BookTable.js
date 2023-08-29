import React, { useState } from 'react';
import axios from 'axios';
import './BookTable.css';
import Table from './Table.jpg';
import Menu from './menu.pdf';

export default function BookTable() {
  const [items, setItems] = useState('');
  const [rows, setRows] = useState(1);

  const handleChange = (event) => {
    const value = event.target.value;
    setItems(value);
    setRows(Math.min(value.split('\n').length, 3));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the form data to send in the POST request
    const formData = {
      name: event.target.elements.name.value,
      roomNumber: event.target.elements.roomNumber.value,
      phoneNumber: event.target.elements.phoneNumber.value,
      guests: event.target.elements.guests.value,
      time: event.target.elements.time.value,
      items: event.target.elements.items.value,
    };

    try {
      // Make a POST request to your backend API endpoint to save the form data
      const response = await axios.post('https://sahyadri-backend.onrender.com/user/tableRequest', formData);
      console.log('Form data saved successfully:', response.data);
      // Handle the success message or any additional logic here

      // Reset the form fields
      event.target.reset();
      setItems('');
      setRows(1);
    } catch (error) {
      console.error('Error saving form data:', error);
      // Handle the error message or any additional error handling here
    }
  };

  const downloadPDF = () => {
    const url = Menu;

    // Create a new anchor element with the PDF file URL
    const link = document.createElement('a');
    link.href = url;

    // Set the download attribute to download the file instead of navigating to it
    link.setAttribute('download', 'menu.pdf');

    // Append the anchor element to the DOM and click it to trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="menu">
        <h3 style={{ color: 'red' }}>Click here to Download Menu Card</h3>
        <button className="btn btn-primary" id="tablebtn" onClick={downloadPDF}>
          Download
        </button>
      </div>
      <div>
        <div className="BookForm">
          <h1 className="BookFormh1">Book A Table</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Name"
                name="name" // Add the name attribute
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Your Room Number"
                type="number"
                className="form-control"
                name="roomNumber" // Add the name attribute
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Your Phone Number"
                type="tel"
                className="form-control"
                name="phoneNumber" // Add the name attribute
                id="exampleInputPhone"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Total number of guests"
                type="number"
                className="form-control"
                name="guests" // Add the name attribute
                id="exampleInputGuests"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Time"
                type="time"
                className="form-control"
                name="time" // Add the name attribute
                id="exampleInputGuests"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                Give us your visiting time so you don't need to wait
              </div>
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Items"
                type="text"
                className="form-control"
                name="items" // Add the name attribute
                id="exampleInputEmail1"
                rows={rows}
                value={items}
                onChange={handleChange}
                style={{ resize: 'none' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" id="tablebtn">
              Submit
            </button>
          </form>
        </div>
        <div>
          <img src={Table} className="Table" alt="" />
        </div>
      </div>
    </>
  );
}
