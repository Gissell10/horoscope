import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

function SignDetails() {
  const router = useRouter();
  const signId = router.query.signId;
  return (
    <div className={styles.signPage}>
      <div className={styles.slideInTop}>
        <Image
          src={`/${signId}.png`}
          alt="sign"
          width={200}
          height={200}
          className={styles.singImg}
        ></Image>
        <p> insert dates </p>
      </div>
      <div></div>
    </div>
  );
}

export default SignDetails;
