'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import silentRoad from "../../../public/silent-road.jpg";
import roadtoSerenity from "../../../public/road-to-serenity.jpg";
import Dragon from "../../../public/dragon.jpg";
import "../../styles/Workshops.scss";

const Workshops = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`page ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-section">
        <h1 className="hero-title">
          Discover the Art <br /> and Craft <br /> of{" "}
          <span className="highlight">Photography</span>
        </h1>
      </div>

      <div className="content-section">
        <div className="image-gallery">
          <div className="image-container">
            <Image
              className="image-card"
              src={silentRoad}
              alt="grayscale of trees and rivers"
              height={400}
              width={300}
              placeholder="blur"
            />
            <div className="image-overlay">
              <h3>Master Composition</h3>
            </div>
          </div>

          <div className="image-container">
            <Image
              className="image-card"
              src={roadtoSerenity}
              alt="sunset view of everglades marsh"
              height={400}
              width={300}
              placeholder="blur"
            />
            <div className="image-overlay">
              <h3>Perfect Lighting</h3>
            </div>
          </div>

          <div className="image-container">
            <Image
              className="image-card"
              src={Dragon}
              alt="reflective clouds over ocean view"
              height={400}
              width={300}
              placeholder="blur"
            />
            <div className="image-overlay">
              <h3>Capture Moments</h3>
            </div>
          </div>
        </div>

        <div className="text-content">
          <p className="text-block animate-up">
            My workshops provide a supportive environment for growth and
            learning. <br />
            Through a blend of theoretical insights, practical demonstrations,
            and hands-on shooting sessions, you'll gain the knowledge and
            confidence to capture stunning images.
          </p>
          
          <p className="text-block animate-up delay-1">
            Join our vibrant community of fellow shutterbugs and embark on an
            exciting journey of creativity and discovery.
          </p>
          
          <p className="text-block animate-up delay-2">
            Browse my upcoming workshops and reserve your spot today. Let's
            capture unforgettable moments together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workshops;