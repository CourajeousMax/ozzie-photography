import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ label, name, type, id }) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.inputBox}>
      <label className={styles.inputLabel} htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={label}
        className={styles.inputInput}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ContactForm;
