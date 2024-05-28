import React, { useState, useEffect } from 'react';
import Tree from './PdfFiles/Tree.pdf';
import Comb from './PdfFiles/Combinatoric.pdf';
import Logic from './PdfFiles/StatementsLogic.pdf';
import Sets from './PdfFiles/SetsTheory.pdf';
import DataStructure from './PdfFiles/DataStructure.pdf';
import Graph from './PdfFiles/Graph.pdf';
import Image1 from '../img/lectureicon.svg'; // replace with your image paths
import Image2 from '../img/mathicon.svg';
import Image3 from '../img/Studying.svg';
import FeedbackForm from '../components/feedback';
import ImageSlider from '../components/ImageSlider';
import SecondFooter from '../SecondFooter';

const DiscreteLectures = () => {
  const topics = [
    { title: 'Дерева', file: Tree },
    { title: 'Комбінаторика', file: Comb },
    { title: 'Логіка висловлювань', file: Logic },
    { title: 'Основи теорії множин', file: Sets },
    { title: 'Структури даних', file: DataStructure },
    { title: 'Теорія графів', file: Graph },
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
    <h1 className="lecture-title">Дискретна математика</h1>
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

export default DiscreteLectures;