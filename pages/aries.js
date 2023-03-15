import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Aries() {
  return (
    <>
      <>
        <Image
          src={"/aries.png"}
          alt="sign"
          width={200}
          height={200}
          className={styles.singImg}
        ></Image>
        <p> 25 December - January 1</p>
      </>
    </>
  );
}
