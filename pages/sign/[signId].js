import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { signs } from "@/constants/signs";

function SignDetails() {
  const router = useRouter();
  const signId = router.query.signId;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.slideInTop}>
          <div
            style={{
              height: "400px",
              position: "relative",
            }}
          >
            <Image
              key={signId}
              src={`/${signId + "Human"}.png`}
              alt={`${signId}`}
              fill={true}
              className={styles.Human}
            />
          </div>
          {signs.map((sign) => {
            return (
              <>
                <h1 key={sign.name}> {sign.name}</h1>
                <p key={sign.date}>{sign.date}</p>
              </>
            );
          })}
        </div>

        <div>
          <h1> about this sign generated for chap GPT API</h1>
        </div>
      </div>
    </>
  );
}

export default SignDetails;
