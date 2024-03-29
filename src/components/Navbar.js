import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/' alt="Logo" width={150} height={50} />
            </div>
            <div className={styles.navLinks}>
                <Link href="/portfolio" legacyBehavior>
                    <a className={styles.navItem}>
                        PORTFOLIO
                    </a>
                </Link>
                <Link href="/workshops" legacyBehavior>
                    <a className={styles.navItem}>
                        WORKSHOPS
                    </a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a className={styles.navItem}>
                        ABOUT
                    </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                    <a className={styles.navItem}>
                        CONTACT
                    </a>
                </Link>
            </div>
            <div className={styles.socialLink}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
