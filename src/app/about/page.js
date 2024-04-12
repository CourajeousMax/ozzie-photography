import React from "react";
import "../../styles/About.module.scss";
const About = () => {
  return (
    <section className="about">
      <div className="about__title-container">
        <h1 className="about__title">Ozzie Gonzalez</h1>
        <h2 className="about__subtitle">Bilingual Photographer</h2>
      </div>
      <div className="about__content">
        <p>Be it by Land or Sea </p>
        <p>
          Capt. Ozzie Gonzalez is a seasoned outdoorsman with over 45 years of experience exploring the diverse landscapes of South Florida. From
          guiding land-based hunting tours to captaining offshore and swamp charter boats, his passion for the outdoors is evident in everything he
          does. Raised in the Coconut Grove area of Miami, his love for nature, particularly the Everglades, began at a young age. He developed a deep
          respect for the wildlife and environment, spending his days fishing, hunting, and exploring the swamps. Capt. Ozzie's expertise extends to
          wood carving, where his intimate knowledge of wildlife shines through in his detailed artwork. Whether leading tours or sharing his stories
          through pictures, Capt. Ozzie is dedicated to educating and inspiring others about the beauty of South Florida's land and sea. Whether you
          speak English or Spanish Capt. Ozzie is guaranteed to educate you with his knowledge and pictures of South Florida's land and sea. He loves
          to have fun and make sure that everyone always wear a smile. It warms his heart to know when anyone purchases one of his pieces of Art, you
          found the same joy and breath taking awe as he did that day taking the picture.
        </p>
      </div>
      <div className="about__quote-container">
        <h3 className="about__quote">One of his mother’s sayings that he loves:</h3>
        <h2 className="about__quote-text">‘There is only so many sunrise and sunsets to see in a life time so enjoy them.'</h2>
      </div>
    </section>
  );
};

export default About;
