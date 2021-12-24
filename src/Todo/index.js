import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context";
import styles from "./styles.module.scss";

const Todo = () => {
  const { removeItem } = useContext(AppContext);
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getToDo = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
      const todo = await res.json();
      setTodo(todo);
    };
    getToDo();
  }, [id]);

  return (
    <div className={styles.toDoItem}>
      <h1>{todo.title}</h1>
      <div>
        <button
          onClick={() => {
            removeItem(todo.id);
            navigate("/");
          }}
        >
          Delete
        </button>

        <Link to={"/"}>Back to main menu</Link>
      </div>
    </div>
  );
};

export default Todo;
