import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://fineartamerica.com/profiles/ozzie-gonzalez",
    src: "/icons8-facebook-90.png",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/artbyoz.photography/",
    src: "/icons8-instagram-90.png",
    alt: "Instagram",
  },
];

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link legacyBehavior href={item.href}>
              <a className={styles.navButton}>{item.label}</a>
            </Link>
            {index < navItems.length - 1 && "/"}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.socialIcons}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            className="nav__link icon nav-items"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className={styles.socialIcon} loading="lazy" alt={link.alt} src={link.src} width={45} height={45} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
