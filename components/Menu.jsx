import styles from "@/styles/Home.module.css";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="#">Daily</a>
        </li>

        <li>
          <a href="#">Weekly</a>
        </li>

        <li>
          <a href="#">Monthly</a>
        </li>

        <li>
          <a href="#">Year</a>
        </li>
      </ul>
    </div>
  );
}
