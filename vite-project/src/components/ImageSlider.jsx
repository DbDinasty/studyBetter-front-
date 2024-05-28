import React, { useState, useEffect } from 'react';
import Image1 from '../img/lectureicon.svg';
import Image2 from '../img/mathicon.svg';
import Image3 from '../img/Studying.svg';

const ImageSlider = () => {
  const images = [Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Slide" className="slide-image" />
    </div>
  );
};

export default ImageSlider;