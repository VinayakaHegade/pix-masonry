import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heroText}>
        Discover over 2,000,000 free Stock Images
      </h1>
      <div className={styles.searchBox}>
        <section className={styles.searchLeft}>
          <Image
            src="search.svg"
            alt="search icon"
            width={21}
            height={21}
          ></Image>

          <div className={styles.divider}></div>
          <h4 className="medium-text">Search</h4>
        </section>
        <button className={`${styles.goBtn} medium-text`}>GO!</button>
      </div>

      <div className={styles.trending}>
        <p className={styles.trendingText}>
          <span className={styles.trendingBold}>Trending:</span> flowers, love, forest, river
        </p>
      </div>
    </section>
  );
};

export default Hero;
