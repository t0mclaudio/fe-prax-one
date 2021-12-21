import { useState, createContext } from "react";

const INITIAL_STATE = [
  {
    id: "1",
    title: "Practice JavaScript",
  },
  {
    id: "2",
    title: "Practice HTML",
  },
  {
    id: "3",
    title: "Practice CSS",
  },
  {
    id: "4",
    title: "Learn React",
  },
];

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(INITIAL_STATE);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addNewToDo = async (title) => {
    // const response = await fetch(process.env.REACT_APP_API_URL, {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     Accept: "application/json;odata.metadata=full",
    //   },
    //   body: JSON.stringify({ title }),
    // });
    // const data = await response.json();
    setToDoList([
      { id: (Math.floor(Math.random() * 20) + 3).toString(), title: title },
      ...toDoList,
    ]);
    setIsModalOpen(false);
  };

  const removeItem = async (id) => {
    // await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    //   method: "DELETE",
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     Accept: "application/json;odata.metadata=full",
    //   },
    //   body: JSON.stringify({ id }),
    // });
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  // useEffect(() => {
  //   const fetchToDoList = async () => {
  //     const response = await fetch(process.env.REACT_APP_API_URL, {
  //       method: "GET",
  //       mode: "no-cors",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //         Accept: "application/json;odata.metadata=full",
  //       },
  //     });
  //     console.log("response :>> ", response);
  //     const data = await response.json();
  //     setToDoList(data);
  //   };
  //   fetchToDoList();
  // }, []);

  return (
    <AppContext.Provider
      value={{ toDoList, isModalOpen, setIsModalOpen, addNewToDo, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
