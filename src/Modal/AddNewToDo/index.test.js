import { screen, render, fireEvent } from "@testing-library/react";
import AddNewToDo from ".";
import { AppContext } from "../../context";

describe("AddNewToDo", () => {
  it("add button should be disabled when input form is empty", () => {
    render(<AddNewToDo />);
    expect(screen.getByRole("button", { name: "Add" })).toBeDisabled();
  });
  it("button should be enable when input has value", () => {
    const addNewToDo = jest.fn();
    render(
      <AppContext.Provider value={{ addNewToDo }}>
        <AddNewToDo />
      </AppContext.Provider>
    );
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button", { name: "Add" });
    fireEvent.input(input, { target: { value: "test" } });
    fireEvent.click(btn);
    expect(btn).toBeEnabled();
    expect(addNewToDo).toBeCalledTimes(1);
  });
});
