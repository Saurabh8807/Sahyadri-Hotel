import React, { useState } from 'react';
import './Deluxe.css';
import img1 from './deluxe1.jpg';
import img2 from './deluxe2.jpg';
import img3 from './deluxe3.jpg';
import img4 from './deluxe4.jpg';
import img5 from './deluxe5.jpg';
import img6 from './deluxe6.jpg';
import img7 from './deluxe7.jpg';
import img8 from './deluxe8.jpg';

export default function Deluxe() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="deluxediv">
      <div className="deluxeh1div">
        <h2 className="deluxeh1">Deluxe Room</h2>
      </div>
      <div className="photoGrid">
        <img src={img1} className="Lakeroom " alt="" onClick={() => openModal(img1)} />
        <img src={img2} className="Lakeroom" alt="" onClick={() => openModal(img2)} />
        <img src={img3} className="Lakeroom" alt="" onClick={() => openModal(img3)} />
        <img src={img4} className="Lakeroom" alt="" onClick={() => openModal(img4)} />
        <img src={img5} className="Lakeroom" alt="" onClick={() => openModal(img5)} />
        <img src={img6} className="Lakeroom" alt="" onClick={() => openModal(img6)} />
        <img src={img7} className="Lakeroom" alt="" onClick={() => openModal(img7)} />
        <img src={img8} className="Lakeroom" alt="" onClick={() => openModal(img8)} />
      </div>
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img src={selectedImage} className="modal-image" alt="" />
        </div>
      )}
    </div>
  );
}
