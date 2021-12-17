import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import styles from "./Search.module.css";
import { filmAPI } from "../../api/api";
import { Card, stateTypes } from "../Card/Card";

interface mySearchValues {
  filmName: string;
}

export const Search: React.FC = () => {
  const [state, setState] = useState({} as stateTypes);

  const initialValues: mySearchValues = { filmName: "" };

  return (
    <>
      <div className={styles.search}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            filmAPI.getFilmsByKeyword(values.filmName).then((response) => setState(response.data));
            console.log("SEARCH BY KEYWORD", state);
          }}
        >
          <Form>
            <Field
              id="filmName"
              name="filmName"
              placeholder="Film Name"
              className={styles.searchInput}
            />
            <button className={styles.searchSubmit} type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <div className={styles.results}>
        {Object.keys(state).length > 0
          ? state.films
              .map((item: any, i: number) => <Card key={i} state={state.films[i]} />)
              .filter((x: any, i: number) => !!state.films[i].description)
          : null}
      </div>
    </>
  );
};
