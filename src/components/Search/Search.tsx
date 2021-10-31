import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import styles from "./Search.module.css";
import { filmAPI } from "../../api/api";

interface mySearchValues {
  filmName: string;
}

interface stateTypes {
  nameOriginal?: string;
}

let initialState: stateTypes = {}


export const Search: React.FC = () => {
  const [state, setState] = useState(initialState);

  const initialValues: mySearchValues = { filmName: "" };

  return (
    <div className={styles.search}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          filmAPI.filmProfile(values.filmName).then((response) => setState(response.data));
          console.log(state);
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
      <div>NAME: {state ? (state.nameOriginal) : null}</div>
    </div>
  );
};
