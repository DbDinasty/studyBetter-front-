import React, { useState, useEffect } from 'react';
import AnlGeometry from './PdfFiles/AnalyticalGeometry.pdf'
import DifferCalculus from './PdfFiles/DifferentialCalculus.pdf'
import LineSecondOrder from './PdfFiles/LineOfSecondOrder.pdf'
import LinerAlgebra from './PdfFiles/LinerAlgebra.pdf'
import MathAnalysis from './PdfFiles/MathematicalAnalysis.pdf'
import VectorAlgebra from './PdfFiles/VectorAlgebra.pdf'
import Image1 from '../img/lectureicon.svg'; // replace with your image paths
import Image2 from '../img/mathicon.svg';
import Image3 from '../img/Studying.svg';
import FeedbackForm from '../components/feedback'
import ImageSlider from '../components/ImageSlider';

import SecondFooter from '../SecondFooter';

const MathLectures = () => {
  const topics = [
    { title: 'Лінійна алгебра', file: LinerAlgebra },
    { title: 'Векторна алгебра', file: VectorAlgebra },
    { title: 'Аналітична геометрія', file: AnlGeometry },
    { title: 'Лінії другого порядку', file: LineSecondOrder },
    { title: 'Математичний аналіз', file: MathAnalysis },
    { title: 'Диференціальне числення', file: DifferCalculus },
  ];
  const images = [Image1, Image2, Image3]; // replace with your image paths
  const [setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);


  return (
    <div>
    <h1 className="lecture-title">Вища математика</h1>
    <div className='lecture-container'>
      
      <div className="content-wrapper">
      <div className='lecture-box'>
      <ul className="lecture-list">
        {topics.map((topic, index) => (
          <li key={index} className="lecture-item">
            <a href={topic.file} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              {topic.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
      </div>
      <div className="image-container">
      <ImageSlider/>
       </div>
    <FeedbackForm/>
    <SecondFooter/>
    </div>
  </div>
  );
};

export default MathLectures;