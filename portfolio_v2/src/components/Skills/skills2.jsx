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

  // auto rotation
  const [autoRotate, setAutoRotate] = useState(null);

  const startAutoRotate = () => {
    setAutoRotate(setTimeout(() => {
      setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + 1);
      startAutoRotate();
    }, 3000)); // rotate every 3 seconds
  };

  const stopAutoRotate = () => {
    clearTimeout(autoRotate);
  };

  const handleUserAction = () => {
    stopAutoRotate();
    startAutoRotate();
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
    handleUserAction();
  };

  const handleNext = () => {
    setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + 1);
    handleUserAction();
  };


  // rotate carousel by swiping
  let initialPos = 0;
  let swipeStarted = false;

  const handleSwipeStart = (e) => {
    swipeStarted = true;
    initialPos = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    handleUserAction();
  };

  const handleSwipeMove = (e) => {
    if (!swipeStarted) return;
    const currentPos = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = initialPos - currentPos;
    if (Math.abs(diff) > 50) { // adjust threshold as needed
      setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + (diff > 0 ? 1 : -1));
      swipeStarted = false;
    }
    handleUserAction();
  };

  const handleSwipeEnd = () => {
    swipeStarted = false;
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    carouselElement.addEventListener('touchstart', handleSwipeStart);
    carouselElement.addEventListener('touchmove', handleSwipeMove);
    carouselElement.addEventListener('touchend', handleSwipeEnd);
    carouselElement.addEventListener('mousedown', handleSwipeStart);
    carouselElement.addEventListener('mousemove', handleSwipeMove);
    carouselElement.addEventListener('mouseup', handleSwipeEnd);
    return () => {
      carouselElement.removeEventListener('touchstart', handleSwipeStart);
      carouselElement.removeEventListener('touchmove', handleSwipeMove);
      carouselElement.removeEventListener('touchend', handleSwipeEnd);
      carouselElement.removeEventListener('mousedown', handleSwipeStart);
      carouselElement.removeEventListener('mousemove', handleSwipeMove);
      carouselElement.removeEventListener('mouseup', handleSwipeEnd);
    };
  }, []);

  // Start auto-rotate when the component mounts
  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate; // clean up on unmount
  }, []);

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
