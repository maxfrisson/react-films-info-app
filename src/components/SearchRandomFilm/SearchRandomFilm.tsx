import React, { useState } from "react";
import { Form, Formik } from "formik";
import styles from "./SearchRandomFilm.module.css";
import { filmAPI } from "../../api/api";
import { Card, stateTypes } from "../Card/Card";
import { AxiosError } from "axios";

interface mySearchValues {
  filmName: string;
}

const RandomIdGenerator = (): number => {
  let minId = 298;
  let maxId = 1294123;
  let result = Math.round(Math.random() * maxId);
  console.log(result);

  return result >= minId ? result : RandomIdGenerator();
};

export const SearchRandomFilm: React.FC = () => {
  const [state, setState] = useState({} as stateTypes);

  const initialValues: mySearchValues = { filmName: "" };

  return (
    <>
      <div className={styles.search}>
        <Formik
          initialValues={initialValues}
          onSubmit={() => {
            filmAPI
              .getFilmById(RandomIdGenerator())
              .then((response) => setState(response.data))
              .catch((reason: AxiosError) => {
                if (reason.response!.status === 404) {
                  alert("ERROR");
                } else {
                  console.log("ELSE");
                }
                console.log(reason.message);
              });
            console.log("SEARCH BY RANDOM", state);
          }}
        >
          <Form>
            <button className={styles.searchSubmit} type="submit">
              CLICK FOR RANDOM FILM
            </button>
          </Form>
        </Formik>
      </div>
      <div className={styles.results}>
        <Card state={state} />
      </div>
    </>
  );
};
