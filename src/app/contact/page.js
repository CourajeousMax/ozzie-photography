"use client"; // Add this line at the top

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/signature-dark.png";
import Navbar from "@/components/Navbar/Navbar";
import ContactForm from "@/components/ContactForm/ContactForm";
import "@/styles/global/Contact.scss";

const ContactPage = () => {
  return (
    <section className="contact">
      <div className="contact__logo-container">
        <Link href="/">
          <Image className="contact__logo" src={Logo} alt="Ozzie's Logo" height={150} width={200} />
        </Link>
        <Navbar />
      </div>
      <div className="contact__content">
        <div className="contact__container">
          <h1 className="contact__text">Let's navigate the seas of opportunity together!</h1>
        </div>
        <div className="contact__container">
          <p className="contact__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper sapien ut mauris fermentum, vitae scelerisque urna dapibus.
            Nulla facilisi. Integer id turpis nec nisi vehicula tempus. Morbi venenatis, justo eu placerat luctus, nulla libero fermentum tortor,
            vitae dignissim dui turpis id risus. Nulla facilisi. Suspendisse at fringilla sapien. Quisque et massa nec nulla commodo ultrices. In
            hac habitasse platea dictumst. Sed in aliquam libero. Vivamus nec felis ut ante tincidunt tempor. Curabitur aliquet efficitur sem, sit
            amet consequat odio gravida a. Sed suscipit lacus vitae sapien tincidunt, at molestie eros tincidunt. Sed nec pharetra eros. Sed sodales
            pharetra ex, vitae placerat lorem vehicula nec. Etiam tempor felis eu vehicula suscipit.
          </p>
        </div>
      </div>

      <article className="contact__content">
        <form className="contact__form" action="https://formsubmit.co/esmeraldassaltyairretreat@gmail.com" method="POST">
          <p>Drop anchor and send a message in a bottle our way, Sailor!</p>
          <h2 className="contact__text">Contact Us</h2>
          <div className="contact__container">
            <ContactForm label="Name:" name="Name" type="text" id="name" />
            <ContactForm label="Phone Number:" name="Phone Number" type="tel" id="phoneNumber" />
            <ContactForm label="Email:" name="Email" type="email" id="email" />
            <ContactForm label="Message:" name="Message" type="text" id="Message" />
            <button className="contact__form-button button">Set Sail</button>
          </div>
        </form>
      </article>
      <div className="contact__content">
        <h2 className="contact__text">Contact:</h2>
        <a className="contact__subtext" href="tel:3055103802">(305)-510-3802</a>
        <br />
        <a className="contact__subtext" href="mailto:captozzie@hotmail.com">captozzie@hotmail.com</a>
      </div>
    </section>
  );
};

export default ContactPage;
