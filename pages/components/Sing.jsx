import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Sign({ children }) {
  return (
    <div className={styles.sing}>
      <Image
        src={"/vigro.png"}
        alt="vigro"
        width={200}
        height={200}
        className={styles.singImg}
      />
      <p>{children}</p>
    </div>
  );
}
