import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addNewToDo = async (title) => {
    const response = await fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    setToDoList([data, ...toDoList]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch("http://localhost:3001/todo");
      const data = await response.json();
      setToDoList(data);
    };
    fetchToDoList();
  }, []);

  return (
    <AppContext.Provider
      value={{ toDoList, isModalOpen, setIsModalOpen, addNewToDo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
