import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/todo/:id" element={<Todo />} />
    </Routes>
  );
};

export default AppRoutes;
