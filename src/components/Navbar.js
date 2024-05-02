import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.frameParent}>
            <div className={styles.overviewPortfolioWorkshoWrapper}>
                <div
                    className={styles.overviewPortfolio}
                >
                    {`Portfolio / Workshops / About / Contact `}
                </div>
            </div>
            <div className={styles.frameWrapper}>
                <div className={styles.groupParent}>
                    <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-1@2x.png"
                    />
                    <img
                    className={styles.iconInstagram1}
                    loading="lazy"
                    alt=""
                    src="/iconinstagram-1-1.svg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
