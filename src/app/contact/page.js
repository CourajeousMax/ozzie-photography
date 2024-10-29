'use client';
import React, { useState, useEffect } from "react";
import styles from "../../styles/Contact.module.css";

const ContactForm = ({ label, name, type, id }) => {
  const getInputProps = () => {
    const props = {
      id,
      type,
      name,
      placeholder: `Enter your ${label.toLowerCase().replace(':', '')}`,
      className: styles.input,
      required: true,
    };

    if (type === "email") {
      props.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
    }
    if (type === "tel") {
      props.minLength = 10;
      props.pattern = "[0-9]{10}";
    }

    return props;
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input {...getInputProps()} />
      {type === "tel" && (
        <small style={{ color: 'rgba(255,255,255,0.6)' }}>
          Format: 1234567890
        </small>
      )}
    </div>
  );
};

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`${styles.contact} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Let's Navigate the Seas of Opportunity Together!</h1>
        <p className={styles.subtitle}>Capture Your Perfect Moment</p>
      </div>

      <div className={styles.wrapper}>
        <article className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <form
              className={styles.form}
              action="https://formsubmit.co/7d373894c22552f7b2056bcfa9178c5b"
              method="POST"
            >
              <div className={styles.formGrid}>
                <ContactForm label="Name:" name="Name" type="text" id="name" />
                <ContactForm
                  label="Phone Number:"
                  name="Phone Number"
                  type="tel"
                  id="phoneNumber"
                />
                <ContactForm
                  label="Email:"
                  name="Email"
                  type="email"
                  id="email"
                />
                <ContactForm
                  label="Message:"
                  name="Message"
                  type="text"
                  id="Message"
                />
              </div>
              <button className={styles.submitButton}>Set Sail →</button>
            </form>
          </div>
        </article>

        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <h2 className={styles.infoTitle}>Get in Touch</h2>
            <div className={styles.infoItem}>
              <i className={styles.infoIcon}>📱</i>
              <a className={styles.infoLink} href="tel:3055103802">
                (305)-510-3802
              </a>
            </div>
            <div className={styles.infoItem}>
              <i className={styles.infoIcon}>📧</i>
              <a className={styles.infoLink} href="mailto:captozzie@hotmail.com">
                captozzie@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;