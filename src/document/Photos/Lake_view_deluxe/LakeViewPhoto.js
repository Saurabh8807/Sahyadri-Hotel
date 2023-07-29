import React, { useState } from 'react';
import './LakeViewPhoto.css';
import img1 from './deluxe1.jpg';
import img2 from './deluxe2.jpg';
import img3 from './deluxe3.jpg';
import img4 from './deluxe4.jpg';
import img5 from './deluxe5.jpg';
import img6 from './deluxe6.jpg';
import img7 from './deluxe7.jpg';
import img8 from './deluxe8.jpg';

export default function LakeViewPhoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="lakediv">
      <div className="lakeh1div">
        <h2 className="lakeh1">Lake View Deluxe Room</h2>
      </div>
      <div className="photoGrid">
        <img src={img1} className="Lakeroom" alt="" onClick={() => handleImageClick(img1)} />
        <img src={img2} className="Lakeroom" alt="" onClick={() => handleImageClick(img2)} />
        <img src={img3} className="Lakeroom" alt="" onClick={() => handleImageClick(img3)} />
        <img src={img4} className="Lakeroom" alt="" onClick={() => handleImageClick(img4)} />
        <img src={img5} className="Lakeroom" alt="" onClick={() => handleImageClick(img5)} />
        <img src={img6} className="Lakeroom" alt="" onClick={() => handleImageClick(img6)} />
        <img src={img7} className="Lakeroom" alt="" onClick={() => handleImageClick(img7)} />
        <img src={img8} className="Lakeroom" alt="" onClick={() => handleImageClick(img8)} />
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={handleImageClose}>
            &times;
          </span>
          <img src={selectedImage} className="modal-image" alt="" onClick={handleImageClose} />
        </div>
      )}
    </div>
  );
}
