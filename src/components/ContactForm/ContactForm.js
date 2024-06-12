import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ label, name, type, id }) => {
  return (
    <div>
      <div className={styles.inputBox}>
        <label className={styles.inputLabel}>{label}</label>
        <input type={type} name={name} placeholder={label} className={styles.inputInput} required />
      </div>
    </div>
  );
};

export default ContactForm;
