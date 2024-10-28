'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`${styles.about} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.hero}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Ozzie <br /> Gonzalez
          </h1>
          <h3 className={styles.subtitle}>Bilingual Photographer</h3>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/ozzie-headshot.jpg"
              alt="Ozzie Gonzalez"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Be it by Land or Sea</h2>
          <p className={styles.text}>
            Capt. Ozzie Gonzalez is a seasoned outdoorsman with over 45 years of
            experience exploring the diverse landscapes of South Florida. From
            guiding land-based hunting tours to captaining offshore and swamp
            charter boats, his passion for the outdoors is evident in everything
            he does. Raised in the Coconut Grove area of Miami, his love for
            nature, particularly the Everglades, began at a young age. He
            developed a deep respect for the wildlife and environment, spending
            his days fishing, hunting, and exploring the swamps. Capt. Ozzie's
            expertise extends to wood carving, where his intimate knowledge of
            wildlife shines through in his detailed artwork. Whether leading
            tours or sharing his stories through pictures, Capt. Ozzie is
            dedicated to educating and inspiring others about the beauty of
            South Florida's land and sea. Whether you speak English or Spanish
            Capt. Ozzie is guaranteed to educate you with his knowledge and
            pictures of South Florida's land and sea. He loves to have fun and
            make sure that everyone always wear a smile. It warms his heart to
            know when anyone purchases one of his pieces of Art, you found the
            same joy and breath taking awe as he did that day taking the
            picture.
          </p>
        </div>
      </div>

      <div className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <h3 className={styles.quoteIntro}>One of his mother's sayings that he loves:</h3>
          <blockquote className={styles.quoteText}>
            'There is only so many sunrise and sunsets to see in a life time so
            enjoy them.'
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;