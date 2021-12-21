import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
