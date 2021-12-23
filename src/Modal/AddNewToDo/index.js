import { useState, useContext } from "react";
import { AppContext } from "../../context";
import styles from "./styles.module.scss";

const AddNewToDo = () => {
  const { setIsModalOpen, addNewToDo } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addNewToDo(title);
  };
  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="buttons">
          <button type="submit" disabled={!title && true}>
            Add
          </button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewToDo;
