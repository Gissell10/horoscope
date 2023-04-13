import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Sign({ id, name, date }) {
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
              key={id}
              src={`/${id + "Human"}.png`}
              alt={`${id}`}
              fill={true}
              className={styles.Human}
            />
          </div>
          <h1 className={styles.signTitle}>{name}</h1>
          <p className={styles.date}>{date}</p>
        </div>

        <div>
          <h1> about this sign generated for chap GPT API</h1>
          <> la llave de app</>
        </div>
      </div>
    </>
  );
}
