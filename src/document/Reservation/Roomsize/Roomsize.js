import React, { useState } from 'react';
import Room1 from "../Roomsize/Deluxe.jpeg"
import Room2 from "./Super_Deluxe.jpg"
import Room3 from "./Deluxe_Lake_Facing.avif"
import './Roomsize.css';
import Flip from 'react-reveal';
import Zoom from 'react-reveal';


export default function Roomsize() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="roomsize">
      <div className="head2">
        <h3 className="h3class">Rates(₹)</h3>
      </div>
      <div className="body1">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Flip left>
          <div className="col5">
            <div className="card" style={{ marginLeft: "2.5vw" }}>
              <img
                src={Room1}
                className="card-img-top"
                alt="Image not found"
                onClick={() => handleImageClick(Room1)}
              />

              <div className="card-body">
                <h5 className="card-title3">DELUXE ROOM</h5>
                <h6 className="card-title3 prize">2500/-</h6>
              </div>
            </div>
          </div>
              </Flip>
              <Zoom bottom>
          <div className="col6">
            <div className="card" style={{ marginLeft: "-13.5vw" }}>
              <img
                src={Room2}
                className="card-img-top"
                alt="Image not found"
                onClick={() => handleImageClick(Room2)}
              />
              <div className="card-body">
                <h5 className="card-title3">SUPER DELUXE ROOM</h5>
                <h6 className="card-title3 prize">3000/-</h6>
              </div>
            </div>
          </div>
          </Zoom>

          <Zoom right>
          <div className="col7">
            <div className="card" style={{ marginLeft: "-0.5vw" }}>
              <img
                src={Room3}
                className="card-img-top"
                alt="Image not found"
                onClick={() => handleImageClick(Room3)}
              />
              <div className="card-body">
                <h5 className="card-title3">LAKE FACING ROOM</h5>
                <h6 className="card-title3 prize">4000/-</h6>
              </div>
            </div>
          </div>
        </Zoom >
        </div>

      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={handleImageClose}>
            &times;
          </span>
          <img
            src={selectedImage}
            className="modal-image"
            alt=""
            onClick={handleImageClose}
          />
        </div>
      )}
    </div>
  );
}
