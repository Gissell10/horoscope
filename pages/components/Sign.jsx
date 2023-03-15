import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Sign({ children }) {
  const signes = [
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
  ];

  return (
    <div className={styles.signes}>
      {signes.map((path) => {
        return (
          <div key={path} className={styles.sing}>
            <Link href={`${path}`}>
              <Image
                src={`/${path}.png`}
                alt="sign"
                width={200}
                height={200}
                className={styles.singImg}
              />
            </Link>
            <p>{`${path[0].toUpperCase() + path.slice(1, path.length)}`}</p>
          </div>
        );
      })}
    </div>
  );
}
