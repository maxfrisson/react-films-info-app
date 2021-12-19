import React, { useState } from "react";
import { Form, Formik } from "formik";
import styles from "./SearchRandomFilm.module.css";
import { filmAPI } from "../../api/api";
import { Card, stateTypes } from "../Card/Card";
import { AxiosError } from "axios";

interface mySearchValues {
  filmName: string;
}

export const SearchRandomFilm: React.FC = () => {
  const [state, setState] = useState({} as stateTypes);

  const initialValues: mySearchValues = { filmName: "" };

  const RandomIdGenerator = (): number => {
    let minId = 298;
    let maxId = 1294123;
    let result = Math.round(Math.random() * maxId);
    console.log("RESULT", result);

    return result >= minId ? result : RandomIdGenerator();
  };

  const handleSubmit = () => {
    filmAPI
      .getFilmById(RandomIdGenerator())
      .then((response: any) => {
        if (response.data.description !== null) {
          console.log("RESPONSE", response);
          return setState(response.data);
        }
        return handleSubmit();
      })
      .catch((reason: AxiosError) => {
        if (reason.response!.status === 404) {
          return handleSubmit();
        }
        console.log(reason.message);
        return handleSubmit();
      });
  };

  console.log("SEARCH BY RANDOM", state);
  return (
    <>
      <div className={styles.search}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
