import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Sign({ children }) {
  return (
    <>
      {[
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces",
      ].map((path) => {
        return (
          <div key={path} className={styles.sing}>
            <Image
              src={`/${path}.png`}
              alt="sign"
              width={200}
              height={200}
              className={styles.singImg}
            />
            <p>{`${path}`}</p>
          </div>
        );
      })}
    </>
  );
}
