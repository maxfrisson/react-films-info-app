import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import styles from "./Search.module.css";
import { filmAPI } from "../../api/api";
import { Card } from "../Card/Card";

interface mySearchValues {
  filmName: string;
}


export const Search: React.FC = () => {
  const [state, setState] = useState({});

  const initialValues: mySearchValues = { filmName: "" };

  return (
    <>
    <div className={styles.search}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          filmAPI.filmProfile(values.filmName).then((response) => setState(response.data));
          console.log("SEARCH", state);
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
      { Object.keys(state).length > 0 ? <Card state={state} /> : null}
    </>
  );
};
