import React, { useState } from 'react';
import './Hotel_img.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import { useNavigate } from 'react-router-dom';

export default function Hotel_img() {
  const [selectedImage, setSelectedImage] = useState(null);
  let navigate = useNavigate();

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const routeChange = () => {
    let path = '/user/reservation';
    navigate(path);
  };

  return (
    <div className="Photosdiv">
      <div className="photosh1div">
        <h2 className="photosh1">Photos</h2>
      </div>
      <div className="photoGrid">
        <img src={img1} className="Lakeroom" alt="" onClick={() => openModal(img1)} />
        <img src={img2} className="Lakeroom" alt="" onClick={() => openModal(img2)} />
        <img src={img3} className="Lakeroom" alt="" onClick={() => openModal(img3)} />
        <img src={img4} className="Lakeroom" alt="" onClick={() => openModal(img4)} />
        <img src={img5} className="Lakeroom" alt="" onClick={() => openModal(img5)} />
        <img src={img6} className="Lakeroom" alt="" onClick={() => openModal(img6)} />
        <img src={img7} className="Lakeroom" alt="" onClick={() => openModal(img7)} />
        <img src={img8} className="Lakeroom" alt="" onClick={() => openModal(img8)} />
        <img src={img9} className="Lakeroom" alt="" onClick={() => openModal(img9)} />
        <img src={img10} className="Lakeroom" alt="" onClick={() => openModal(img10)} />
        <img src={img11} className="Lakeroom" alt="" onClick={() => openModal(img11)} />
        <img src={img12} className="Lakeroom" alt="" onClick={() => openModal(img12)} />
      </div>
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img src={selectedImage} className="modal-image" alt="" />
        </div>
      )}
      <button type="button" id="booknow10" onClick={routeChange} class="btn btn-primary">
        Book Now
      </button>
    </div>
  );
}
