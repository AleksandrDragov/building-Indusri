import React, { useState, useEffect } from 'react';
import './scrollup.less';

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scrollUp-container ${isVisible ? 'visible' : ''}`}>
      {isVisible && (
        <button className="scrollUp-btn" onClick={handleUp}>^</button>
      )}
    </div>
  );
}

export default ScrollUp;

