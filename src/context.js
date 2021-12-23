import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({})

const AppContextProvider = ({children}) => {
  const [toDoList, setToDoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch("http://localhost:3001/todo");
      const data = await response.json();
      setToDoList(data);
    }
    fetchToDoList()
  }, [])

  return (
    <AppContext.Provider value={{toDoList, isModalOpen, setIsModalOpen}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider