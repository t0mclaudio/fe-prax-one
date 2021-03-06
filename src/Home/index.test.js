import { AppContext } from "../context";
import { screen, render, fireEvent } from "@testing-library/react";
import Home from "./index";
import { MemoryRouter } from "react-router-dom";

// setup render
const renderWithContext = (context) => {
  return render(
    <AppContext.Provider value={context}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </AppContext.Provider>
  );
};

// test when empty
it("displays nothing to show message when empty", () => {
  renderWithContext({
    toDoList: [],
  });
  expect(screen.getByText("Nothing to show")).toBeInTheDocument();
});

// test when not empty
it("displays todo list when not empty", () => {
  renderWithContext({ toDoList: [{ id: "1", title: "test" }] });
  expect(screen.getByText("test")).toBeInTheDocument();
});

it("calls remove item when clicked", () => {
  const removeItem = jest.fn();
  renderWithContext({ toDoList: [{ id: "1", title: "test" }], removeItem });
  const button = screen.getByLabelText("delete item");
  fireEvent.click(button);
  expect(removeItem).toHaveBeenCalled();
});
