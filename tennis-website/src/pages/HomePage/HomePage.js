import React, { useState, useEffect } from 'react';
import "./HomePage.css";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function HomePage() {
  const images = [
    "./images/homePage/fullTeam.jpg",
    "./images/homePage/masonSwing.jpg",
    "./images/homePage/josephScott.jpg",
    "./images/homePage/brianJosephJacobNationals.jpg",
    "./images/homePage/vtech.jpg",

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const switchToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const newIntervalId = setInterval(switchToNextImage, 5000);
    setIntervalId(newIntervalId);

    return () => {
      clearInterval(newIntervalId);
    };
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    setIntervalId(newIntervalId);
  };

  return (
    <>
      <div className='home-page'>
        <h1>Welcome To The Foundation Of UVA Adaptive Athletics!</h1>
      </div>
      <div className="links-home">
          <a href="https://www.instagram.com/uva_wheelchair_tennis/" class="button-link-home" target="_blank" rel="noopener noreferrer">
              <img src="./images/instagram.svg" alt="Instagram SVG" className="icon-home"/>
              Instagram
          </a>
          <a href="https://www.gofundme.com/f/the-wheelchair-tennis-team-at-uva?utm_medium=referral&utm_source=widget&utm_campaign=p_cp%2Bshare-sheet" class="button-link-home" target="_blank" rel="noopener noreferrer">
              {/* <img src="./images/sabers.svg" alt="GoFundMe SVG" className="icon"/> */}
              GoFundMe
          </a>
          <a href="mailto:vug5ue@virginia.edu" class="button-link-home">
              <img src="./images/mail.svg" alt="Mail SVG" className="icon-home" style={{ filter: "invert(1)" }}/>
              Contact Us
          </a>
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
