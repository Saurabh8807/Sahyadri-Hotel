import React, { useState } from 'react';
import './RestoImgSlider.css';
import img1 from './RestoSlider1.jpg'
import img2 from './RestoSlider2.jpg'
import img3 from './RestoSlider3.jpg'


export default function RestoImgSlider() {
  const slides = [
    {
      id: 1,
      image: img1,
      title: 'Welcome to the sahyadri hotel',
    },
    {
      id: 2,
      image: img2,
      title: 'Cafe',
      description: 'A cozy retreat where the aroma of freshly brewed coffee blends with the chatter of friends and strangers, creating a warm and inviting atmosphere',
    },
    {
      id: 3,
      image:img3,
      title: 'Dinner',
      description: 'The restaurant dinner was a delightful culinary experience, filled with exquisite flavors and impeccable service.',
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
        <i className="fas fa-chevron-left"> &#8592;</i>
      </div>
      <div id="next" onClick={handleNextClicked}>
        <i className="fas fa-chevron-right">&#8594;</i>
      </div>
    </div>
  );
}
