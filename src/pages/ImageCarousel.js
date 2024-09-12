import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Ensure the CSS file matches the below code

const images = [
    "../assest/audiol.jpg",
    "../assest/audiol1.jpg",
    "../assest/audiol2.jpg",
    "../assest/audiol3.jpg"
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Set the timeout to change the image every 5 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 5 seconds interval for each image
  
      return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);
  
    return (
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide effect
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageCarousel;