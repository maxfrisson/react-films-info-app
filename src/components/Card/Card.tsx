import styles from "./Card.module.css";

interface cardTypes {
  state: stateTypes | any;
}

interface stateTypes {
  nameOriginal?: string;
  year?: string;
  posterUrlPreview?: string;
  description?: string;
  genre?: string;
}

export const Card: React.FC<cardTypes> = ({ state }) => {
  console.log("CARD", state);

  return (
    <div className={styles.cardBody}>
      <div className={styles.cardImg}>
        <img src={state.posterUrlPreview} alt="" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardName}>{state.nameRu}</div>
        <div className={styles.cardFilmYear}>{state.year}</div>
        <div className={styles.cardFilmDescription}>{state.description}</div>

        <div className={styles.cardFilmGenre}>{state.genre}</div>
      </div>
    </div>
  );
};
