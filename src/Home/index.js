import { useContext } from "react";
import { AppContext } from "../context";

const Home = () => {
  const { toDoList } = useContext(AppContext);
  return  (
    <section>
      <h1>To do</h1>
      <ul>
        {
          toDoList.map(item => {
            return (
              <li key={item.id}>{item.title}</li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Home;