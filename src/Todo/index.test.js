import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Todo from "./index";
import { AppContext } from "../context";

const generateTodo = (context) => {
  return (
    <AppContext.Provider value={context}>
      <MemoryRouter>
        <Todo />
      </MemoryRouter>
    </AppContext.Provider>
  );
};

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
      id: "1",
    }),
  };
});

describe("Todo", () => {
  it("renders expected output", () => {
    render(
      generateTodo({
        toDoList: [{ id: "1", title: "Learn Javascript" }],
      })
    );
    expect(screen.getByText(/Learn Javascript/i)).toBeInTheDocument();
  });
  it("Triggers delete", () => {
    const removeItem = jest.fn();
    render(
      generateTodo({
        toDoList: [{ id: "1", title: "Learn Javascript" }],
        removeItem,
      })
    );
    const deleteButton = screen.getByRole("button", /Delete/i);
    fireEvent.click(deleteButton);
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
});
