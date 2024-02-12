import "./skills2.scss";
import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cellCount = 4;
  let theta;
  let radius;

  const calculateCellSize = () => {
    const cellWidth = carouselRef.current.offsetWidth;
    return cellWidth;
  };

  const rotateCarousel = () => {
    const angle = theta * selectedIndex * -1;
    carouselRef.current.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
  };

  const updateCarousel = () => {
    theta = 360 / cellCount;
    const cellSize = calculateCellSize();
    radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    const cells = carouselRef.current.children;
    for (let i = 0; i < cells.length; i++) {
      let cellAngle = theta * i;
      cells[i].style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
      cells[i].style.opacity = i < cellCount ? 1 : 0;
    }
    rotateCarousel();
  };

  // useEffect to handle carousel setup and updates
  useEffect(updateCarousel, [selectedIndex]);

  const handlePrevious = () => {
    setSelectedIndex((prevSelectedIndex) => prevSelectedIndex - 1);
  };

  const handleNext = () => {
    setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + 1);
  };

  // Render the carousel JSX
// Render the carousel JSX
return (
    <div className="scene">
      <button onClick={handlePrevious} className="carousel-button previous-button">&lt;</button>
      <div className="carousel" ref={carouselRef}>
        {/* Dynamically create cells */}
        {[...Array(cellCount)].map((_, i) => (
          <div className="carousel__cell" key={i}>
            {i + 1}
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button next-button">&gt;</button>
    </div>
  );
};

export default Carousel;
