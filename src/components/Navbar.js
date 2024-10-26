// src/components/Navbar.js
import React from "react"; // Add this import
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/portfolio", label: "Portfolio", hasDropdown: true },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        {navLinks.map((link, index) => (
          <React.Fragment key={link.href}>
            <Link legacyBehavior href={link.href}>
              <a className={styles.navButton}>{link.label}</a>
            </Link>
            {index < navLinks.length - 1 && "/"}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.socialIcons}>
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className="nav__link icon nav-items"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.alt}
          >
            <Image
              className={styles.socialIcon}
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
