import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const array = Array.from({ length: 91 }, (_, i) => i);
  const totalDonations = 100000;
  const donationsGoal = 300000;
  const progressPercent = 66;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vaquitapp</h1>
        <div className={styles.goal}>
          <img
            className={styles.goalImg}
            src="https://www.shutterstock.com/image-photo/new-playstation-5-slim-model-260nw-2377124501.jpg"
          />
          <div className={styles.goalTexts}>
            <h2 className={styles.goalTitle}>Quiero mi Play!!!</h2>
            <div className={styles.goalDonations}>
              <span className={styles.totalDonations}>{totalDonations}</span>{" "}/{" "}
              {donationsGoal}
            </div>
            <div
              className={styles.goalProgressBar}
              style={{ "--progress": progressPercent } as any}
            ></div>
            <p className={styles.goalDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem veniam nisi, eum laboriosam inventore pariatur unde modi,
              molestias debitis asperiores aspernatur doloribus odit dicta
              culpa, quod et ea enim.
            </p>
          </div>
        </div>
        <div className={styles.donations}>
          {array.map((i) => (
            <div
              key={i}
              className={styles.donation}
            >
              Donación
            </div>
          ))}
        </div>
        <button className={styles.donateButton}>Sumate a la causa</button>
      </div>
    </div>
  );
}
