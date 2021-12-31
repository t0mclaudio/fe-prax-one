import { useContext } from "react";
import { AppContext } from "../context";
import styles from "./styles.module.scss";
import { FaTimes, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NothingToShow = () => {
  return (
    <section className={styles.section}>
      <p className={styles.nothingToShow}>Nothing to show</p>
    </section>
  );
};

const ToDoList = ({ todos, removeItem }) => {
  return (
    <section className={styles.section}>
      <ul>
        {todos.map((item, idx) => {
          return (
            <li
              key={item.id}
              style={{ animationDelay: `${150 * (idx + 1)}ms` }}
            >
              <p>{item.title}</p>
              <div>
                <Link to={`todo/${item.id}`}>
                  <FaEye />
                </Link>
                <button
                  aria-label="delete item"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTimes />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Home = () => {
  const { toDoList, removeItem } = useContext(AppContext);
  if (toDoList.length === 0) {
    return <NothingToShow />;
  } else {
    return <ToDoList todos={toDoList} removeItem={removeItem} />;
  }
};

export default Home;
