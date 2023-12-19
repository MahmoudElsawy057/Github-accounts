/* eslint-disable react/prop-types */
import { useRef } from "react";
import classes from "./Form.module.css";

const SearchForm = ({ onSearch }) => {
  const searchInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = searchInputRef.current.value;

    onSearch(enteredName);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <input ref={searchInputRef} />
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
