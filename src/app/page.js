'use client';
import styles from "./page.module.css";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 100;
      const moveY = (clientY - window.innerHeight / 2) / 100;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`${styles.desktopOverview} ${isLoaded ? styles.loaded : ''}`}>
      <section 
        className={styles.fullScreenBackground}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      
      <div className={styles.heroContent}>
        <div className={styles.welcomeMessage}>
          <p>Capturing the Beauty of South Florida</p>
        </div>
      </div>
    </div>
  );
}