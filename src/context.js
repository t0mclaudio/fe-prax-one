import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  console.log(process.env.REACT_APP_API_URL);
  const [toDoList, setToDoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addNewToDo = async (title) => {
    const response = await fetch(process.env.REACT_APP_API_URL, {
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
    await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
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
      const response = await fetch(process.env.REACT_APP_API_URL);
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
