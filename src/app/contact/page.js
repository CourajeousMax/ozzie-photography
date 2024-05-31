import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/signature-dark.png";
import Navbar from "../../components/Navbar";
import "../../styles/Contact.scss";
const page = () => {
    return (
      <>
        <section className="contact">
          <div className="about__logo-container">
            <Link href="/">
              <Image className="about__logo" src={Logo} alt="Ozzie's Logo" height={150} width={200}></Image>
            </Link>
            <Navbar />
          </div>
        </section>
      </>
    );
};

export default page;