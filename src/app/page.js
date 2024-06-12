import Image from "next/image";
import styles from "@/styles/modules/page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.desktopOverview}>
      <section className={styles.fullScreenBackground} />
      <header className={styles.headerContent}>
        <Image
          className={styles.logo}
          loading="lazy"
          alt=""
          src="/signature.png"
          width={300}
          height={112}
        />
      </header>
      <Navbar />
    </div>
  );
}
