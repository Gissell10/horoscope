import styles from "@/styles/Home.module.css";
export default function Menu() {
  return (
    <div>
      <ul className={styles.menu}>
        <li>
          <a href="#" className={styles.menuLinkA}>
            Daily
          </a>
        </li>

        <li>
          <a href="#" className={styles.menuLinkA}>
            Weekly
          </a>
        </li>

        <li>
          <a href="#" className={styles.menuLinkA}>
            Monthly
          </a>
        </li>

        <li>
          <a href="#" className={styles.menuLinkA}>
            Year
          </a>
        </li>
      </ul>
    </div>
  );
}
