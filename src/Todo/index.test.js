import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Todo from ".";
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

describe("Todo", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ id: "1 ", title: "Learn Javascript" }),
      })
    );
  });
  it("renders expected output", async () => {
    render(
      generateTodo({
        toDoList: [{ id: "1", title: "Learn Javascript" }],
      })
    );
    expect(await screen.findByText(/Learn Javascript/i)).toBeInTheDocument();
  });
  it("Triggers delete", async () => {
    const removeItem = jest.fn();
    render(
      generateTodo({
        removeItem,
      })
    );
    const deleteButton = await screen.findByText(/Delete/i);
    fireEvent.click(deleteButton);
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
});
