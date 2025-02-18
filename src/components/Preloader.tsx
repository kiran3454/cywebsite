import { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    // Create stars
    const background = document.getElementById("spaceBackground");
    if (background) {
      const numberOfStars = 100;
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
        background.appendChild(star);
      }
    }

    // Create comets periodically
    const createComet = () => {
      if (background) {
        const comet = document.createElement("div");
        comet.className = "comet";
        const startPos = Math.random() * 100;
        comet.style.left = `${startPos}%`;
        background.appendChild(comet);
        setTimeout(() => comet.remove(), 3000);
      }
    };

    const cometInterval = setInterval(createComet, 4000);

    return () => {
      clearInterval(cometInterval);
      if (background) {
        background.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="preloader-container">
      <div id="spaceBackground"></div>
      
      <div className="atom">
        <div className="center"></div>
        
        <div className="orbit orbit1">
          <div className="electron electron1"></div>
        </div>
        
        <div className="orbit orbit2">
          <div className="electron electron2"></div>
        </div>
        
        <div className="orbit orbit3">
          <div className="electron electron3"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;