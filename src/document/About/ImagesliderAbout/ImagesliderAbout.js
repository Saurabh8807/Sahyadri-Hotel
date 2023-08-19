import React from 'react';
import About_Image from './About_Image.jpg';
import './ImagesliderAbout.css';
import { useSpring, animated } from 'react-spring';

export default function ImagesliderAbout() {
  const animationProps = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <>
      <img src={About_Image} className="card-img" alt="..." />
      <div>
        <h5 className="card-title1">Your Perfect Stay In Mumbai</h5>
      </div>
      </>
  );
}
