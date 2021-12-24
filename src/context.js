import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  console.log(process.env.REACT_APP_API_URL);
  const [toDoList, setToDoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addNewToDo = async (title) => {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json;odata.metadata=full",
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
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json;odata.metadata=full",
      },
      body: JSON.stringify({ id }),
    });
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json;odata.metadata=full",
        },
      });
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
