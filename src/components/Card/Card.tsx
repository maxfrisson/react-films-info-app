import styles from "Card.module.css";

export const Card = () => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardImg}>
        <img src="" alt="" />
      </div>
      <div className={styles.cardFilmName}></div>
      <div className={styles.cardRatingKinopoisk}></div>
      <div className={styles.cardFilmYear}></div>
      <div className={styles.cardFilmGenre}></div>
      <div className={styles.cardFilmGenre}></div>
    </div>
  );
};
