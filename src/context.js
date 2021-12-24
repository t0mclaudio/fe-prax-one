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

  const removeItem = async (id) => {
    await fetch(`http://localhost:3001/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    setToDoList(toDoList.filter((item) => item.id !== id));
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
      value={{ toDoList, isModalOpen, setIsModalOpen, addNewToDo, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
