import React from "react";

const ContactForm = ({ label, name, type, id }) => {
  const getInputProps = () => {
    const props = {
      id,
      type,
      name,
      placeholder: label,
      className: "input__input",
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
    <div className="input__box">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input {...getInputProps()} />
      {type === "tel" && <small>Format: 1234567890</small>}
    </div>
  );
};

export default ContactForm;
