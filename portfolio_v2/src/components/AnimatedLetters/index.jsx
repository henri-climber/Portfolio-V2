import { useState } from 'react';
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [hoveredIndices, setHoveredIndices] = useState([]);

  const handleMouseEnter = (i) => {
    setHoveredIndices((prevIndices) => [...prevIndices, i]);
  };

  const handleAnimationEnd = (i) => {
    setHoveredIndices((prevIndices) => prevIndices.filter(index => index !== i));
  };

  return (
    <span className='test'>
      {strArray.map((char, i) => (
        <span 
          key={char + i} 
          className={`${letterClass} _${i + idx} ${hoveredIndices.includes(i) ? 'bounceIn' : ''}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onAnimationEnd={() => handleAnimationEnd(i)}
        >
          <h2>{char}</h2>
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters