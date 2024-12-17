import WallThickness from "./components/WallThickness";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <WallThickness />
      <section className={styles.info}>
        Find pipeline outer diameter and wall thickness in mm based on the
        nominal pipe size input according to ASME B36.10 / B36.19. Click
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.vanleeuwen.com/en/assets/File/Pipe%20schedule%20overzicht%20website.pdf"
        >
          here
        </a>
        to get the source data.
      </section>
    </div>
  );
}
