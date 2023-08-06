import React, { useState, useEffect } from 'react';
import "./HomePage.css";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function HomePage() {
  const images = [
    "./images/fullTeam.jpg",
    "./images/jacob.jpg",
    "./images/mason.jpg",

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const switchToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(switchToNextImage, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className='home-page'>
        <h1>Welcome To The Foundation Of UVA Adaptive Athletics!</h1>
      </div>
      <div className='body'>
          <div className='slider'>
            <div className='slide-wrapper' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className='slide'>
                  <img src={image} alt={`${index + 1}`} className='full-image' />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='dots'>
            <ChevronLeftIcon className='left-arrow' onClick={() => goToImage((currentImageIndex - 1 + images.length) % images.length)} />
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentImageIndex === index ? 'active' : ''}`}
              />
            ))}
            <ChevronRightIcon className='right-arrow' onClick={() => goToImage((currentImageIndex + 1) % images.length)} />
          </div>
    </>
  );
}
