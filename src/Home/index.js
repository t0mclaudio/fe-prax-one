import { useContext } from "react";
import { AppContext } from "../context";

const NothingToShow = () => {
  return (
    <section>
      <p>Nothing to show</p>
    </section>
  )
}

const ToDoList = ({todos}) => {
  return (
    <section>
    <ul>
      {
        todos.map(item => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })
      }
    </ul>
  </section>
  )
}

const Home = () => {
  const { toDoList } = useContext(AppContext);
  if (toDoList.length === 0) {
    return <NothingToShow />
  } else {
    return <ToDoList todos={toDoList} />
  }
}

export default Home;