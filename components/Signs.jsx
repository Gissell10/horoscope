import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { signs } from "@/constants/signs";

export default function Signs() {
  return (
    <div className={styles.signes}>
      {signs.map((sign) => {
        return (
          <div key={sign.id} className={styles.sign}>
            <Link href={`/sign/${sign.id}`}>
              <Image
                src={`/${sign.id}.png`}
                alt="sign"
                width={200}
                height={200}
                className={styles.singImg}
              />
            </Link>
            <p>{sign.name}</p>
          </div>
        );
      })}
    </div>
  );
}
