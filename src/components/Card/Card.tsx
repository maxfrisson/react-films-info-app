import styles from "./Card.module.css";

interface cardTypes {
  state: stateTypes;
}

interface stateTypes {
  nameOriginal?: string;
  year?: string;
  posterUrlPreview?: string;
  description?: string;
}

export const Card: React.FC<cardTypes> = ({ state }) => {
  console.log("CARD", state);

  return (
    <div className={styles.cardBody}>
      <div className={styles.cardImg}>
        <img src={state.posterUrlPreview} alt="" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardName}>{state.nameOriginal}</div>
        <div className={styles.cardFilmYear}>{state.year}</div>
        <div className={styles.cardFilmDescription}>{state.description}</div>

        <div className={styles.cardFilmGenre}></div>
      </div>
    </div>
  );
};
