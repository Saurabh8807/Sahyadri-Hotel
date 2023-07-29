import React, { useState } from 'react';
import './ImageSlider.css';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

export default function ImageSlider() {
  const slides = [
    {
      id: 1,
      image: img1,
      title: 'Welcome to the sahyadri hotel',
    },
    {
      id: 2,
      image: img2,
      title: 'Reception',
      description: 'An inviting and well-designed hotel entrance sets the tone for a memorable stay',
    },
    {
      id: 3,
      image:img3,
      title: 'Bedrooms',
      description: 'A cozy bedroom provides a peaceful sanctuary for rest and relaxation',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClicked = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevClicked = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="image-slider">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === currentSlide ? 'current' : ''}`}>
          <img className="image" src={slide.image} alt={slide.title} />
          <div className="content">
            <h1 className="title">{slide.title}</h1>
            <p className="description">{slide.description}</p>
          </div>
        </div>
      ))}
      <div id="prev" onClick={handlePrevClicked}>
        <i className="fas fa-chevron-left">&larr;</i>
      </div>
      <div id="next" onClick={handleNextClicked}>
        <i className="fas fa-chevron-right">&rarr;</i>
      </div>
    </div>
  );
}
