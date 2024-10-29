'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/workshops", label: "Workshops" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      href: "https://fineartamerica.com/profiles/ozzie-gonzalez",
      icon: "/icons8-facebook-90.png",
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/artbyoz.photography/",
      icon: "/icons8-instagram-90.png",
      alt: "Instagram",
    },
  ];

  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        {navLinks.map((link, index) => (
          <div key={link.href} className={styles.linkWrapper}>
            <Link 
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
              {index < navLinks.length - 1 && <span className={styles.separator}>/</span>}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.socialIcons}>
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className={styles.socialIcon}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.alt}
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={45}
              height={45}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;